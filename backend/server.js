const express = require('express')
const morgan = require('morgan')
const Item = require('./models/itemModel')
const itemGenerator = require('./createItems')
const cors = require('cors')


// Generate Random Item Data In DataBase
// itemGenerator()

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
app.get('/inventory', async (req,res) => {

    const pageAsNumber = Number.parseInt(req.query.page)

    let page = 0
    if(!Number.isNaN(pageAsNumber) && pageAsNumber > 0){
        page = pageAsNumber
    }

    const response = await Item.findAndCountAll({
        limit: 20,
        offset: page * 20
    })

    res.send({
        content: response.rows,
        totalPages: Math.ceil(response.count / 20)
    })
})

app.get('/inventory/search', async (req,res) => {
    const pageAsNumber = Number.parseInt(req.query.page)
    
    let page = 0
    if(!Number.isNaN(pageAsNumber) && pageAsNumber > 0){
        page = pageAsNumber
    }

    let resultLocation = ' '

    let allLocations = ['Main Office', 'Cavea Tbilisi Mall', 'Cavea East Point', 'Cavea Gallery', 'Cavea City Mall']
    req.query.location ? (resultLocation = req.query.location.replace(/%20/g, " ")) : (resultLocation = allLocations)
    let sort = req.query.sort || 'id'
    let sortBy = req.query.sortby || 'ASC'
    console.log(sortBy)
    const response = await Item.findAndCountAll({
        where: {
            location: resultLocation
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
app.post('/add', async (req,res) => {
    const data = Item.build({
        name: req.body.name,
        location: req.body.location,
        price: req.body.price
    })

    data.save()
})

// Delete Request
app.delete('/inventory/:id', (req,res) => {
    Item.destroy({
        where: {
            id: req.params.id
        }
    })
})