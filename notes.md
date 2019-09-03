steps

-git status
-mkdir folderName
-cd folderName
-git init
-npm init -y
-code .
-npm i -D nodemon <- install nodemon as a development time dependency
- add server to run nodemon index.js in the package.json

- npx gitignore node (look it up at npm js.org)

--------------------------------------------------------------

endpoint (url + http method) === function

POST /api/movies (body: movie) === postApiMovies(movie)

| non REST         |          REST          |
| :--------------- | :--------------------: |
| /createMovie     |    POST /api/movies    |
| /removeMovie/:id | DELETE /api/movies/:id |
---------------------------------------------------------------

Other Approaches to building Web API

- GraphQL
- gRPC
- RPC
- SOAP