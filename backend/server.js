const express = require('express')
const morgan = require('morgan')
const Item = require('./models/itemModel')

// Creating Express App
const app = express()

// Middleware
app.use(morgan('dev'))

// JSON handling
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Listen To Port 4000
app.listen(4000, () => console.log('Listening To Port 4000'))

// GET Request
app.get('/inventories', (req,res) => {
    Item.findAll()
        .then(items => {
            res.json(items)
            console.log('Json sent successfully')
        })
        .catch(err => console.log('Unable To Fetch Items From DataBase:', err))
})

// Post Request
app.post('/add', (req,res) => {
    const data = Item.build({
        name: req.body.name,
        location: req.body.location,
        price: req.body.price
    })

    data.save()
})