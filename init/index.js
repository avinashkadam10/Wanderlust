require('dotenv').config({ path: '../.env' });

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


const dbUrl = process.env.ATLASDB_URL;

main()
.then( ()=>{
    console.log("Connected to DB");
}).catch(err =>{
    console.log(err);
});
async function main(){
    await mongoose.connect(dbUrl);
};

const initDB = async () =>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner:"66c47e7153d25a241486b66f"}));
    await Listing.insertMany(initData.data);
    console.log("data was initilized");
};

initDB();
