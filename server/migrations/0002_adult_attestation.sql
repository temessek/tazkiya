-- The account holder's statement that they are 18 or older (owner decision, 23 Nov 2026: AI is for adults only).
-- Unix milliseconds of the statement; NULL until made. Deleted with the account.
ALTER TABLE accounts ADD COLUMN adult_at INTEGER;
