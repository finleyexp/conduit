SELECT
	"BOOKS"."id",
	"BOOKS"."name"
FROM
	"conduit_db"."BOOKS"
FULL JOIN"conduit_db"."BOOKS_STATUS"
	ON
		"BOOKS_STATUS"."BOOK_ID" = "BOOKS"."id"
WHERE
	"BOOKS_STATUS"."ARTICLE_ID" = $1;