#Shopping List
## Available Scripts

In the project directory, you can run the following dependencies install scripts

### `npm install`
### `npm install-client`

Once the installation is finished you can setup your mongodb connection in:

### `/config/dbLogin.js`

## Starting the server

Server can be launch using the following command:

##Launch back and front together

### `npm run dev`

## Launch front and back separatly

## `npm run server`
## `npm run client`

### For more information about server script:

`"scripts": {
     "start": "node server.js",
     "server": "nodemon server.js",
     "client-install": "npm install --prefix=client",
     "client": "npm start --prefix=client",
     "dev": "concurrently \"npm run server\" \"npm run client\""
   }`
   
for the client side  : 

`"scripts": {
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test",
     "eject": "react-scripts eject"
   },`

