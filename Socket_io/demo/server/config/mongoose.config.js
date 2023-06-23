const mongoose = require("mongoose");
const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
const uri = `mongodb+srv://${username}:${pw}@cluster0.yrlgqvs.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("Established a connection with the database"))
.catch((err)=>console.log(`Something went wrong with the connection. Error: ${err}`))