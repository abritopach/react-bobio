# ReactBobio

Sample project that shows how to build a Passengers APP with React, Redux (State Management) and Material UI.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project shows you how to:

    * Use React, Redux and Material UI.
    * Show passengers cards.
    * Add new passenger.

Technologies: React, React Redux, Material UI, JavaScript.

![Technologies](readme_resources/technologies.jpg "Technologies")

## App Example

![App](readme_resources/app.gif "App")

## Options for testing the server side

----------

## Start mongo & import passengers json

```bash
    $ mongod
    $ mongoimport --jsonArray --db dbName --collection collectionName --file passengers.json
```

## Start nodejs server (PASSENGERS REST API)

```bash
    install dependencies:
    $ cd server/express-mongoose-bobio && npm install

    run the app:
    $ DEBUG=express-mongoose-bobio:* npm start
```

## Start fake json server (PASSENGERS REST API)

```bash
    $ cd json-server 
    $ json-server --watch db.json --port 5656
```

* [json server](https://github.com/typicode/json-server)

----------

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
