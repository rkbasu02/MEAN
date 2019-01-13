var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/employ');

// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var empSchema  = {
    "empname" : String,
    "empcity" : String
};
// create model if not exists.
module.exports = mongoose.model('emp',empSchema);


