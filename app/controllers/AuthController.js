const connection =  require('../../db/connect')
const UserModel = require('../models/User')
const Authenticate = require('../Services/Authenticate')

class AuthController{
    loginView(req, res){
        res.render('pages/auth/login')
    }

    async login(req, res){
        const {email, password} = req.body;

        const data =await Authenticate.login(email, password);

        if (data){
            req.session.user = data
            req.session.loggedIn = true
            res.redirect('/user/account')
        }else{
            res.redirect('/login')
        }
    }

    registerView(req, res){
        res.render('pages/auth/register')
    }

    async register(req, res){
        const {name, email, password} = req.body;

        const query = "INSERT into users(name, email, password) VALUES(?, ?, ?)";

        connection.query(query, [name, email, password], error=>{
            if (error) throw error;
        });

        const data =await Authenticate.login(email, password);

        if (data){
            req.session.user = data
            req.session.loggedIn = true
            res.redirect('/user/account')
        }else{
            res.redirect('/login')
        }
    }

    logout(req, res){
        req.session.user = null
        req.session.loggedIn = null
        res.redirect('/login')
    }
}

module.exports = new AuthController