const { Sequelize } = require('sequelize')
require('dotenv').config()
// Setup DataBase
const inventory = new Sequelize(process.env.PGDATABASE,process.env.PGUSER,process.env.PGPASSWORD,{
    host: 'localhost',
    dialect: 'postgres',
    port: '5000'
})

// Authenticate DataBase Connection
inventory.authenticate()
    .then(() => {
        console.log('Connection Has Established Successfully')
    })
    .catch(err => {
        console.log('Unable To Connect To The DataBase:', err)
    })

module.exports = inventory