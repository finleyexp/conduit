DELETE FROM "conduit_db"."BOOKS_STATUS"
WHERE "BOOK_ID" = $1 AND "ARTICLE_ID" = $2 AND "TEAM_ID" = $3;