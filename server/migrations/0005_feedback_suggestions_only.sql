-- Owner correction (27 Nov 2026): feedback is for suggestions and improvements only, with no kind to choose
-- (no "liked", "didn't like" or "problem"). The table was created the same day and was still empty in production,
-- so it is rebuilt without its `type` column. Everything else (privacy, deletion with the account) is unchanged.
CREATE TABLE feedback_new (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,   -- never reused, so the reader's `since` cursor never skips or repeats
  t          INTEGER NOT NULL,                    -- server time, ms
  text       TEXT NOT NULL,                       -- the suggestion, 1 to 1000 characters
  email      TEXT,                                -- optional, for a reply
  account_id TEXT,                                -- only with consent; deleted with the account
  page       TEXT,                                -- the screen it was sent from, e.g. "/#/me" or "/parents/"
  edition    TEXT NOT NULL CHECK (edition IN ('kids', 'adult')),   -- the children's edition sends only from the parents' page
  lang       TEXT NOT NULL CHECK (lang IN ('ar', 'en'))
);
INSERT INTO feedback_new (id, t, text, email, account_id, page, edition, lang)
  SELECT id, t, text, email, account_id, page, edition, lang FROM feedback;
DROP TABLE feedback;
ALTER TABLE feedback_new RENAME TO feedback;
CREATE INDEX feedback_account ON feedback (account_id);
