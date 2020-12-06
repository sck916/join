const express = require ("express");
const cors = require ("cors");
const path = require ("path");
const { mongo, Mongoose } = require("mongoose");

const app = express();
app.use(cors());

require("./startup/db")();

const CONNECTION_URL = "mongodb+srv://join:join123@cluster0.jmavo.mongodb.net/<dbname>?retryWrites=true&w=majority";

const port = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT< () => console.log('Server running on port: ${PORT}')))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

app.listen(port, () => console.log(`Listenining on port ${port}`));
