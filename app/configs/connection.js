const {Sequelize} = require('sequelize')

const db = new Sequelize('db_ads', 'root', '', {
	host: 'localhost',
	dialect: 'mysql'
} )

module.exports = db