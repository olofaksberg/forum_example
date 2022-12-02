<!-- @format -->

my idea with this repo is to show some tips that has helped me improve my react code.
most tips will be about handling data from an api, but there will also be some other small examples on, for example, how to make your react app responsive.

you find the examples as branches in this repo. example_one = start code. example_two = some improvments to the code. and so on..

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

BRANCH example_two

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

IMPROVEMENTS

- move the Router component from src/app/App.js to src/index.js. we just want it to be wrapped around our app, so it might aswell be in index.js. the cleaner our App.js is, the better.
- to make App.js even more clean - make the Routes its own component. i put it in src/app/approutes.
- as it is now - anyone can just go to the url "/forum", even if you're not logged in. we want to protect this route, so you can only reach it when you're logged in. i add the component "ProtectedRoute" in src/app/appRoutes and wrap my elements in AppRoutes that i want to be protected. you can see we pass a prop to the ProtectedRoute component in src/app/appRoutes/AppRoutes. if that value is false, you won't be able to reach the children. in this case - if user is false = dont render the children, instead = redirect to "/" again.
- i create http.js in src/utils. there i have fetch functions - one for the method GET and one for the method POST. now we don't have to write these longass fetch functions everytime we want to fetch something. just use our GET() and POST() functions instead.
- change the way we handle the inputs in src/components/views/home/Home.js and src/components/views/addPost/AddPost.js. before we used useState to handle the inputs. we had an onChange listener in our input elements that set our inputState and makes the component to rerender everytime we typed or delete a character in the input field. instead we use react hook useRef to get the value when we click the submit button - because that's the only time we need the input value.
- we pass props down the components tree a lot. use react hook useContext() to avoid that. i create UserContext and PostsContext in src/app/App.js and wrap a Provider component around those elements that needs access to my Providers value - value in this case being user, setUser and posts, setPosts. now i can import those values in any component i want, as long as they're children of that provider (wrote prodiver first lol :P).
- instead of using conditional rendering the standard way = {shouldRender === true && MyComponent}, i create an If component in src/components/helpers. imo it makes the conditional rendering a bit easier to work work. it takes a condition as a prop and will render its children if that statement isn't false. works kinda as the ProtectedRoute component.

ADDITIONS

- the package 'react-responsive'. i think its a good and simple tool for making you app responsive. in this app i add a classname to my div className="App" based screenwidth, and change the background color based on the classname.
