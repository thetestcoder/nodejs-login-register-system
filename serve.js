const express = require('express')
const app = express()
const session = require('express-session')


require('dotenv').config()


//MIDDLEWARES
app.use(session({
    secret: 'secret',
    resave:true,
    saveUninitialized:true
}));
app.use(function(req, res, next) {
    res.locals.request = req;
    next();
});
app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))




//SETTINGS
app.engine('ejs', require('ejs-locals'))
app.set('view engine', 'ejs')
app.set('views', './views')

//Routes
require('./routes')(app)




//BOOTSTRAP APP
const startApp = () =>{
    try{
        app.listen(process.env.APP_PORT || 3000)
        console.log('Application is running')
    }catch (e) {
        console.log(e)
    }
}

startApp();