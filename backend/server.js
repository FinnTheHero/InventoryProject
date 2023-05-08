const express = require('express')
const morgan = require('morgan')
const Item = require('./models/itemModel')
const itemGenerator = require('./createItems')
const cors = require('cors')


// Generate Random Item Data In DataBase
itemGenerator()

// Creating Express App
const app = express()

// Middleware
app.use(morgan('dev'))
app.use(cors({origin:'http://localhost:3000'}))

// JSON handling
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Listen To Port 4000
app.listen(4000, () => console.log('Listening To Port 4000'))

// GET Request
app.get('/inventories', async (req,res) => {

    const pageAsNumber = Number.parseInt(req.query.page)
    const sizeAsNumber = Number.parseInt(req.query.size)

    let page = 0
    if(!Number.isNaN(pageAsNumber) && pageAsNumber > 0){
        page = pageAsNumber
    }

    let size = 20
    if(!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber < 20){
        size = sizeAsNumber
    }


    const response = await Item.findAndCountAll({
        limit: size,
        offset: page * size
    })

    res.send({
        content: response.rows,
        totalPages: Math.ceil(response.count / size)
    })
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