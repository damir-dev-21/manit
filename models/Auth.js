const {Schema,model, models} = require('mongoose');

const schema = new Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = model('Auth',schema);