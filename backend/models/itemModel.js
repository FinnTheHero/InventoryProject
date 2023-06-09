const { Sequelize, DataTypes } = require('sequelize')
const inventory = require('../database.js')

// Setup Item Model
const Item = inventory.define('Item',{
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