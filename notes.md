# Markdown Pad:

## Consumer web && Admin web

- Single repo, multi folders


## MUST HAVES:

- Post
- Comments
- User or email for comments?
- Date and Timestamp for comments and Posts
- No title for comments
- Published and Unpublished posts 
- User model : Admin or reader
- REST API
- cors and JWT and Passport
- JWT and localstorage

## FRONT END:

- ReactJS
- fetch calls

## ADMIN SIDE:

- List of all Posts
- Publish and Unpublish
- NEW Post form


# DB SPECIFICS

## users
- email TEXT PRIMARY KEY
- password_hash TEXT
- admin BOOLEAN

## POSTS:
- id SERIAL PRIMARY KEY
- Title
- Content
- Author_id foreign key
- timestamp
- published boolean

- create : ```CREATE TABLE posts (id SERIAL PRIMARY KEY, title TEXT, content TEXT, author TEXT REFERENCES users(email), timestamp TIME DEFAULT CURRENT_TIMESTAMP);```

- INSERT:
    `INSERT INTO posts (title, content, author) VALUES ('First test Post', 'this is a test content for the post!', 'w');`

## comments
- commentid
- postid foreign key
- timestamp
- comment title
- comment text

- CREATE: `CREATE TABLE comments (id SERIAL PRIMARY KEY, postid INTEGER REFERENCES posts(id) ON DELETE CASCADE, timestamp TIME DEFAULT CURRENT_TIMESTAMP, title TEXT, comment TEXT);`

- INSERT: `INSERT INTO comments (postid, title, comment) VALUES (2, 'SUCKS BALLS', 'what else do you want me to say, it sucks balls');`

# Routes

## Blogs (non admin):

- home ('/')
- post ('/post/:id')
    - comments ('/post/:id/comments/:commentid')
    (they all have timestamps but only posts have headings)
    - posts can be published or unpublished

- author accounts to write blogs and edit them
- admin accounts to approve and delete blogs if needed (on its way)

NOTE : merge author and admin accounts as on table and one attribute


