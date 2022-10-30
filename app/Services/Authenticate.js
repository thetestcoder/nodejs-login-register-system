const connection = require("../../db/connect");
const util = require("util");
const query = util.promisify(connection.query).bind(connection)

class Authenticate{

    async login(email, password){
        const selectQuery = "SELECT * from users where email = ? and password = ?";

        const rows = await query(selectQuery, [email, password]);

        return rows.length ? rows[0] : false;
    }

    async register(name, email, password){
        const insertQuery = "INSERT into users(name, email, password) VALUES(?, ?, ?)";

        await query(insertQuery, [name, email, password], error=>{
            if (error) throw error;
        });
    }
}

module.exports = new Authenticate