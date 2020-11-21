const {Schema,model} = require('mongoose')

const comentSchema = new Schema({
    title:String,
    name:String,
    coment:String
})

module.exports = model('Coment',comentSchema)