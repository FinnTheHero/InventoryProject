const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../database')

// Setup Item Model
const Item = sequelize.define('Item',{
    name:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    price: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    location: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'Items'
})

module.exports = Item