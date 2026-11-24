-- The Google account picture (owner decision, 24 Nov 2026): only its URL on lh3.googleusercontent.com, refreshed at each
-- Google sign-in, shown as the account holder's own profile picture. NULL when Google sends none. Deleted with the account.
ALTER TABLE accounts ADD COLUMN picture TEXT;
