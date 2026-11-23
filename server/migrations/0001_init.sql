-- Tazkiya accounts and journal sync (stage 2). Times are Unix milliseconds unless noted.

-- A family account, owned by the parent (or by an adult for themself). Children are profiles inside it.
CREATE TABLE accounts (
  id         TEXT PRIMARY KEY,           -- random UUID
  email      TEXT NOT NULL UNIQUE,       -- lower-cased
  google_sub TEXT UNIQUE,                -- set once the account signs in with Google
  created    INTEGER NOT NULL,
  seq        INTEGER NOT NULL DEFAULT 0  -- change counter: every write batch takes the next value
);

-- Sessions: only the SHA-256 of the cookie value is stored.
CREATE TABLE sessions (
  hash       TEXT PRIMARY KEY,
  account_id TEXT NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
  created    INTEGER NOT NULL,
  expires    INTEGER NOT NULL,
  seen       INTEGER NOT NULL
);
CREATE INDEX sessions_account ON sessions(account_id);

-- Email sign-in links: single use, short lived, only the hash is stored.
CREATE TABLE login_tokens (
  hash    TEXT PRIMARY KEY,
  email   TEXT NOT NULL,
  expires INTEGER NOT NULL
);
CREATE INDEX login_tokens_expires ON login_tokens(expires);

-- Google sign-in in progress (PKCE verifier and nonce), ten minutes at most.
CREATE TABLE oauth_states (
  hash     TEXT PRIMARY KEY,
  verifier TEXT NOT NULL,
  nonce    TEXT NOT NULL,
  expires  INTEGER NOT NULL
);

-- Profiles p1..p9 inside an account (the app allows four). A deleted profile keeps only this row with gone = 1,
-- so other devices of the family learn of the deletion; its entries are removed.
CREATE TABLE profiles (
  account_id TEXT NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
  pid        TEXT NOT NULL,
  name       TEXT,
  edition    TEXT,
  burn_at    INTEGER NOT NULL DEFAULT 0,  -- the last year-end burn: older challenges are refused
  gone       INTEGER NOT NULL DEFAULT 0,
  updated    INTEGER NOT NULL,
  PRIMARY KEY (account_id, pid)
);

-- Journal entries, last write wins per (profile, kind, id) on u. A deleted entry keeps no content (del = 1, data NULL).
CREATE TABLE entries (
  account_id TEXT NOT NULL,
  pid        TEXT NOT NULL,
  kind       TEXT NOT NULL,              -- note | blessing | challenge | khabia | seen
  id         TEXT NOT NULL,
  t          INTEGER NOT NULL,           -- written at (client)
  u          INTEGER NOT NULL,           -- last changed at (client), the LWW clock
  del        INTEGER NOT NULL DEFAULT 0,
  data       TEXT,                       -- validated JSON, NULL once deleted
  seq        INTEGER NOT NULL,
  PRIMARY KEY (account_id, pid, kind, id),
  FOREIGN KEY (account_id, pid) REFERENCES profiles(account_id, pid) ON DELETE CASCADE
);
CREATE INDEX entries_seq ON entries(account_id, seq);

-- Fixed-window rate limits. Keys hold hashes, never raw addresses. reset is in seconds.
CREATE TABLE rate (
  k     TEXT PRIMARY KEY,
  n     INTEGER NOT NULL,
  reset INTEGER NOT NULL
);
