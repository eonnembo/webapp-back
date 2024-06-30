
const {Sequelize} = require("sequelize")

const db = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "root",
    database: "webapp",
    port: 3306,
})

module.exports = db