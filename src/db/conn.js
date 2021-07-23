const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://localhost:27017/dynamicwebsite",
    {useFindAndModify:false, 
     useNewUrlParser: true ,
     useUnifiedTopology: true})
.then( () => console.log("connection successful for mongoose"))
.catch( (err) => console.log(err));