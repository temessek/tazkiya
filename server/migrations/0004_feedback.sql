-- Feedback and suggestions (owner request, 27 Nov 2026): what people liked, did not like, suggest, or found broken.
-- Anonymous by default: no IP (the rate limit keeps only a hash, in `rate`), no account unless the sender ticked
-- "you may contact me" while signed in. `email` only when the sender typed one for a reply.
-- A signed-in sender's linked rows are deleted with the account; a given email is deleted on request (docs/SERVER.md).
CREATE TABLE feedback (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,   -- never reused, so the reader's `since` cursor never skips or repeats
  t          INTEGER NOT NULL,                    -- server time, ms
  type       TEXT NOT NULL CHECK (type IN ('liked', 'disliked', 'idea', 'problem')),
  text       TEXT NOT NULL,                       -- 1 to 1000 characters
  email      TEXT,                                -- optional, for a reply
  account_id TEXT,                                -- only with consent; deleted with the account
  page       TEXT,                                -- the screen it was sent from, e.g. "adult/#/me" or "parents/"
  edition    TEXT NOT NULL CHECK (edition IN ('kids', 'adult')),   -- the children's edition sends only from the parents' page
  lang       TEXT NOT NULL CHECK (lang IN ('ar', 'en'))
);
CREATE INDEX feedback_account ON feedback (account_id);
