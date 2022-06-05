
// main file 
const express = require('express')
const app = express()

//ejs view engine 
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

// middle the working time
const restricted = require('./middlewares/date&timerestrictions')
app.use(restricted)

// '/' home page 
app.get('/', (req,res,next)=>{
    res.render("home")
})

//routes 
const servicesRouter = require('./routes/services')
const contactRouter = require('./routes/contact')

app.use('/services', servicesRouter)
app.use('/contact', contactRouter)


//port listener
app.listen(3000)