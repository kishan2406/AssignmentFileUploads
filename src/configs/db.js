const mongoose = require("mongoose");

module.exports = () => {

    return mongoose.connect("mongodb+srv://kishankp10:kishankp10@cluster0.rsxyi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}