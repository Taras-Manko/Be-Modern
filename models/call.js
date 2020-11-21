const {Schema,model} = require('mongoose')
const callSchema = new Schema({
    number:Number,
    name:String,
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = model('Call',callSchema)