const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userProfileSchema = new mongoose.Schema({
    username:{
        type:String
    },

    email:{
        type:String
    },

    businessName:{
        type:String
    },

    address:{
        type:String
    },

    accountType:{
        type:String
    },

    accountNumber :{
        type:String
    },

    mobileNumber:{
        type:String
    },

    password:{
        type:String
    }


},{timestamps:true}) 


const userProfileModel = mongoose.model('userProfiles',userProfileSchema);

module.exports = {
    userProfileModel
}
