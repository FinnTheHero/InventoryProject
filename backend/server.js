const express = require('express')
const morgan = require('morgan')
const Item = require('./models/itemModel')
const itemGenerator = require('./createItems')
const cors = require('cors')


// Generate Random Item Data In DataBase
itemGenerator(500)

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
    
    let page = 0
    if(!Number.isNaN(pageAsNumber) && pageAsNumber > 0){
        page = pageAsNumber
    }

    let searchLocation = ' '

    let allLocations = ['Main Office', 'Cavea Tbilisi Mall', 'Cavea East Point', 'Cavea Gallery', 'Cavea City Mall']
    req.query.location ? (searchLocation = req.query.location.replace(/%20/g, " ")) : (searchLocation = allLocations)
    let sort = req.query.sort || 'id'
    let sortBy = req.query.sortby || 'ASC'

    const response = await Item.findAndCountAll({
        where: {
            location: searchLocation
        },
        order: [
            [sort, sortBy]
        ],
        limit: 20,
        offset: page * 20
    })

    res.send({
        content: response.rows,
        totalPages: Math.ceil(response.count / 20)
    })
})

// Post Request
app.post('/inventories', async (req,res) => {
    await Item.create({
        name: req.body.name,
        location: req.body.location,
        price: req.body.price
    })
})

// Delete Request
app.delete('/inventories/:id', async (req,res) => {
    await Item.destroy({
        where: {
            id: req.params.id
        }
    })
})