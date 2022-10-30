const authRoutes = require('./auth')
const accountRoutes = require('./account')
const isAuthenticated = require('../app/middleware/auth')

module.exports = (app) =>{
    app.get('/', (req, res)=>{
        res.render('pages/home')
    })


    app.use('/user', isAuthenticated, accountRoutes)
    app.use('/', authRoutes)

    // app.get('*', (req, res)=>{
    //     res.render('pages/404')
    // })
}