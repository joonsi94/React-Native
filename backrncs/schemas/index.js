const mongoose = require('mongoose');

// 중복제거
// require('dotenv').config(); // process.env env 설정한 내용이 가져온다.

const mongo_url = process.env.MONGO_URL;

// console.log("mongo_url: ", mongo_url);

const connect = ()=>{
  mongoose.connect(mongo_url,{ dbName:'rncs' })
    .then(()=>{
      console.log("Mongo DB Connected!")
    })
    .catch((err)=>{
      console.error('Mongo DB Error',err);
    });
}

module.exports = connect;