// Cloudflare Pages Functions entry: every /api/* request goes to the router in src/api.js.
import { handle } from "../../src/api.js";

export const onRequest = ctx => handle(ctx.request, ctx.env);
