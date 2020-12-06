const express = require ("express");
const cors = require ("cors");
const path = require ("path");
const mongoose  = require("mongoose");

const app = express();
app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());
if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}

require("./startup/routes")(app);
require("./startup/db")();

// const CONNECTION_URL = "mongodb+srv://join:join123@cluster0.jmavo.mongodb.net/<dbname>?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/join", { useNewUrlParser: true, useUnifiedTopology: true })
    

app.listen(PORT, () => console.log(`Listenining on port ${PORT}`));
