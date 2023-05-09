const { Sequelize } = require('sequelize')
require('dotenv').config()
// Setup DataBase
const sequelize = new Sequelize(process.env.PGDATABASE,process.env.PGUSER,process.env.PGPASSWORD,{
    host: 'localhost',
    dialect: 'postgres',
    port: '5000'
})

// Authenticate DataBase Connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection Has Established Successfully')
    })
    .catch(err => {
        console.log('Unable To Connect To The DataBase:', err)
    })

module.exports = sequelize