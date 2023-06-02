const mongoose = require("mongoose")

const userSchema= new mongoose.Schema({
    fname:{
        type:String
    },
    age:{
        type:String
    },
    email:{
        type:String
    }
})



const User = mongoose.Model("user", userSchema)



module.exports = User