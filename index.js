const express = require('express')
const config = require('./config/config')
const url = config.URL
const exphbs  = require('express-handlebars');
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const Call = require('./models/call')
const Coment = require('./models/coment')
const PORT = process.env.PORT || 3000


app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.post('/call',async (req,res) => {
    const {number,name} = req.body
    const user = new Call({number,name})
    await user.save()
    setTimeout(() => {
        res.redirect('/')
    },3000)
})

app.get('/',async (req,res) => {
    const coments = await Coment.find().lean() 
    res.render('index',{
        coments
    })
})

app.post('/coment',async (req,res) => {
  const {title,name,coment} = req.body
  const newComent = new Coment({title,name,coment})
  await newComent.save()
  res.redirect('/')
})


async function start() {
    await mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology: true
    })
    app.listen(PORT,() => {
        console.log('Is run')
        
    })
}
start()