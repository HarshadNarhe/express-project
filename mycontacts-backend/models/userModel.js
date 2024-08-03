const mongoose = require("mongoose");

const usreSchema = mongoose.Schema(
    {
        username: {
         type: String,
         require: [true, "Please add the user name"],
         },
         email: {
           type: String,
          require: [true, "Please add the user emnail address"],
          unique: [true, "Email address already used"],
        },
         password: {
            type: String,
            require: [true, "please add the password"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", usreSchema);