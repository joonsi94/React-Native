const mongoose = require("mongoose");

const mongo_url = "mongodb+srv://wnstjd637:sDRVOuNkBfVwWktD@cluster0.lr0j6ui.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// console.log("mongo_url:", mongo_url);

const connect = async () => {
    mongoose.connect(mongo_url, {dbName: "rncs"})
        .then(() => {
            console.log("Mongo DB Connected successfully");
        })
        .catch(err => {
            console.error(err);
        })
}

module.exports = connect;