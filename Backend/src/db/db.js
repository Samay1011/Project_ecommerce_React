const mongoose = require("mongoose")

const connect = ()=>{
    // mongoose.connect("mongodb://localhost:27017/VIPS")
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("database connected");
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = connect