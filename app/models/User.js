const connection = require('../../db/connect')

class User{
    constructor() {

        const createTableQuery = "CREATE TABLE IF NOT EXISTS users(" +
            "id int not null AUTO_INCREMENT," +
            "name varchar(255) not null," +
            "email varchar(255) not null," +
            "password varchar(255) not null," +
            "PRIMARY KEY (id)" +
            ");"

        connection.query(createTableQuery)

    }
}

module.exports = new User()