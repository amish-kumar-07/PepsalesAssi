CREATE TABLE "notifications" (
	"id" integer PRIMARY KEY NOT NULL,
	"type" varchar(255) NOT NULL,
	"message" varchar(255) NOT NULL,
	"status" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
