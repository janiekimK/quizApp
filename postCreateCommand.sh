
#!/bin/bash

# Run SQLite commands to initialize the database
sqlite3 quiz.db '.read /workspaces/quizApp/database/create_db.sql'
sqlite3 quiz.db
sqlite3 .quit

# Start the Node.js server
node server.js