const connection = require('../../db/connect')

class AccountController{
    account(req, res){
        const user = req.session.user;

        if (user){
            const query = "select * from users where email = ?";
            connection.query(query, [user.email], (err, data)=>{
                if (err) throw err;
                if (data.length > 0){
                    res.render('pages/account', {user:data[0]})
                }else{
                    res.render('pages/404')
                }

            });
        }
    }
}

module.exports = new AccountController