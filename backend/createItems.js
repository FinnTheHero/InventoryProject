const Item = require('./models/itemModel')
const inventory = require('./database')

const itemGenerator = (n) => inventory.sync({ force: true }).then(async () => {
    const locations = [
        'Main Office',
        'Cavea Tbilisi Mall',
        'Cavea Gallery',
        'Cavea East Point',
        'Cavea City Mall'
    ]

    for(let i = 1; i < n; i++){
        let randomIndex = Math.floor(Math.random() * locations.length)
        let randomPrice = Math.floor(Math.random() * 100)
        const item = {
            name: `item${i}`,
            location: `${locations[randomIndex]}`,
            price: randomPrice
        }

        await Item.create(item)
    }
})

module.exports = itemGenerator