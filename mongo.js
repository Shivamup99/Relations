const mongoose = require("mongoose")

const url ="mongodb+srv://shivam:xhm3GmmmfXknvXUh@cluster0.9ipdy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(url,{useCreateIndex:true,useNewUrlParser:true,useFindAndModify:true,useUnifiedTopology:true}).then(()=>{
    console.log("database connected")
})
.catch((err)=>{
    console.log(err)
})