const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const router = require("./router.js");

//Use port stored in .env file if it exists which it doesn't haha gottem
//If we are too stupid to have a .env file atm then just use port 4000
const PORT = process.env.PORT || 4000;

//Express middleware
app.use(cors());
app.use(express.json()); //Allow passing of json files

//Use URI stored in .env file but we aren't using one rn ahahahaha gottem
const uri = process.env.ATLAS_URI;

//connect with mongodb altas uri
mongoose.connect(
    "mongodb+srv://Kevin:XqAUTJVXVsa8QU7k@dubhacks.kekrk.mongodb.net/pixeltown?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    }
);

mongoose.connection.once("open", () => {
    console.log("Connection with MongoDB was successful!!!!");
});

//use routes in router at home url
app.use("/", router);

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
})
