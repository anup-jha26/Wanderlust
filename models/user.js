const { string } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({   //automatically adds username and a hashed and salted password field
    email: {
        type: String,
        required: true
    },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);