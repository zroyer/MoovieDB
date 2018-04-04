# MoovieDB
- A lightweight SPA that manages a home movie collection - database comes loaded with some of my favorites!
- Hit the `Add Movie +` button to start adding movies
- Select a view from the `View` button:
  - View all movies in a table view
  - Search for specific movies in a card view


## Local Development
- First, clone the repo 👯‍♀️
- `cd` into the directory, `npm install`, and start the server with `node server.js`
- In the same directory, start the client with `npm start`
- Check it out at `localhost:3000`!


## Tech Stack
- [Node.js](https://github.com/nodejs/node): JS runtime for executing the server-side code.
- [Express](https://github.com/expressjs/express): Tooling for the HTTP server.
- [body-parser](https://github.com/expressjs/body-parser): Parses incoming request bodies in a middleware before it reaches handlers.
- [MongoDB](https://www.mongodb.com/): The data was unstructured and unrelated, and the required queries were very simple, so it made more sense to use a non-relational database like MongoDB.
- [Mongoose](https://github.com/Automattic/mongoose): Schema-based solution used to model application data, used in conjunction with MongoDB.
- [mLab](https://mlab.com/): Database-as-a-Service for MongoDB. I chose to use mLab because of the low size of the data and to simplify the local development process.
- [React](https://github.com/facebook/react): Used for building the client-side component-based user interface.
- [Axios](https://www.npmjs.com/package/axios): Used for client-side HTTP requests to the server.
- [react-router](https://github.com/ReactTraining/react-router): Client-side routing for React to keep that SPA feel.
- [Ant.design](https://ant.design/): My go-to React UI kit. I love the simple and clean components in this kit.
