<!-- @format -->

my idea with this repo is to show some tips that has helped me improve my react code.
most tips will be about handling data from an api, but there will also be some other small examples on, for example, how to make your react app responsive.

you find the examples as branches in this repo. example_one = start code. example_two = some improvements to the code. and so on.. changes is in the readme of each branch.

GET STARTED

- git clone <thisProject>
- cd <thisProject>
- npm i
- cd ./ses_1
- npm i

- create .env file in root folder
- add in .env: DB_URI=<yourMongoConnectionString>
- add PORT in .env: PORT=5500

- in root folder: node server.js
- in ./ses_1: npm start

---

BRANCH example_one

--- server ---

- we have a server.js in root folder. it connects our frontend to our backend. for example a function that immediately connects our DB.

--- backend ---

- we have models in /api/models.
- we have controllers in /api/controllers.
- we have routes in /api/routes.

--- frontend ---

- we have a home page where you can signup and signin.
- we have a forum page with posts feed and a "+" button in the right-bottom corner.
- we have a add_post page where you can add a post.

- we have a header. you see your name and can logout if you're logged in - if you're @forum page.

- we'll be linked to the add_post page by clicking on the "+" button @forum page.
