# Notes

## Ways of managing a db schema:

1. migrations === preferred way
    - Migrations are a record of every change up until the point of that change
    - A way to express the changes up until that point and time
2. using a gui/cli tool : like SQLite => watch video for this
3. use sql scripts


## Story

- v1: record client's phone number = 2000
- v3: record client's email = 2002
- v4: want to switch to contact info (type, value) Multiple emails/phones/social media.... 2007 => Database has changed
    --- Here you won't have an email or phone number on you client table.

What happens if you run v3 code against v4 database

## Primary Key

- a unique way of identifying every entry that auto increments with an integer
- named with id or [tablename]id

**Every Table MUST have a Primary Key (PK)

We are abstracting: Telling the db what is important

Data Model > validation > db constraints

## Constraints

## Migrations

## Steps:

1. npx knex init to create knexfile.js
2. moved the config object to knexfile.js from fruits router
3. removed staging and production properties from knexfile.js
4. added db-config.js
5. changed the reference of fruits router to bring db from db-config.js
