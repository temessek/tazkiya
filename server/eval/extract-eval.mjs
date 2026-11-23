// Compares Workers AI models on the extraction prompt (src/extract.js) with six fictional journal entries.
// Usage (from outputs/server): CF_ACCOUNT_ID=... CF_API_TOKEN=... node eval/extract-eval.mjs out.json [model ...]
// The token needs Workers AI access. Results go to the given file; nothing is stored anywhere else.
import { writeFileSync } from "node:fs";
import { modelInput, parseAnswer, careLine, riskWords } from "../src/extract.js";
import { SAMPLES } from "./samples.mjs";

const [, , outFile = "eval-out.json", ...models] = process.argv;
const MODELS = models.length ? models : [
  "@cf/google/gemma-4-26b-a4b-it",
  "@cf/openai/gpt-oss-120b",
  "@cf/qwen/qwen3.8-27b",
  "@cf/meta/llama-4-scout-17b-16e-instruct",
];
const { CF_ACCOUNT_ID: A, CF_API_TOKEN: TOK } = process.env;
if (!A || !TOK) { console.error("CF_ACCOUNT_ID and CF_API_TOKEN are required"); process.exit(1); }


async function run(model, s) {
  const body = modelInput(model, s.text, s.lang, s.edition, s.gender);
  const t0 = Date.now();
  const r = await fetch(`https://api.cloudflare.com/client/v4/accounts/${A}/ai/run/${model}`, { method: "POST", headers: { authorization: "Bearer " + TOK, "content-type": "application/json" }, body: JSON.stringify(body) });
  const ms = Date.now() - t0, j = await r.json().catch(() => null);
  if (!r.ok || !j || !j.success) return { ms, error: JSON.stringify(j && j.errors || r.status).slice(0, 300) };
  const parsed = parseAnswer(j.result);
  return { ms, usage: j.result.usage || null, parsed, care: parsed && (parsed.risk || riskWords(s.text)) ? careLine(s.lang, s.edition, s.gender) : undefined,
    raw: typeof j.result.response === "string" ? j.result.response.slice(0, 1500) : undefined };
}

const out = { date: new Date().toISOString(), models: MODELS, results: [] };
for (const s of SAMPLES) for (const m of MODELS) {
  const res = await run(m, s);
  out.results.push({ sample: s.id, model: m, ...res });
  console.log(s.id, m, res.ms + "ms", res.error || JSON.stringify(res.parsed));
}
writeFileSync(outFile, JSON.stringify(out, null, 2));
