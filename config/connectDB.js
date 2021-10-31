
const mongoose = require("mongoose");

const connectDB=async() => {
    try {
// step1
// mongoose.connect(process.env.MONGO_URI);
await mongoose.connect(process.env.MONGO_URI);
//step2
console.log("database is connected");
    }
    catch(error) {
console.log("database is nont conected",error);

    }
};
module.exports=connectDB;