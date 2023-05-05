const { Sequelize, DataTypes } = require('sequelize')

// Setup DataBase
const sequelize = new Sequelize('TestDB','postgres','noza1234',{
    host: 'localhost',
    dialect: 'postgres',
    port: '5000'
})

// Authenticate DataBase Connection
sequelize.authenticate()
    .then(() => console.log('Connection Has Established Successfully'))
    .catch(err => console.log('Unable To Connect To The DataBase:', err))

module.export = sequelize