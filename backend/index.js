// to connect to the DB and start the server

import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv"; 

import RestaurantsDAO from "./api/dao/restaurantsDAO.js";

// load in environment variables
dotenv.config();

const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI, 
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    }
)
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    await RestaurantsDAO.injectDB(client); // initial reference to collection in DB
    app.listen(port, () => {
        console.log('listening on port', port)
    })
});