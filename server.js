var express = require('express')
var cors = require('cors')
var app = express()

let port = 3001

app.use(cors())
app.use(express.json())

app.get('/get-pokemon-by-name/:name', async(req, res) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${req.params['name']}`)
        if (!response.ok) {
            throw new Error('dag nabbit')
        }

        const json = await response.json()
        res.send({'name': json['species']['name'], 
            'id': json['id'], 
            'weight': json['weight']})
    } catch (error) {
        console.error(error)
    }
})

app.get('/get-pokemon-image/:name', async(req, res) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${req.params['name']}`)
        if (!response.ok) {
            throw new Error('gosh darnit')
        }

        const json = await response.json()
        res.send(json['sprites']['front_default'])
    } catch (error) {
        console.error(error)
    }
})

app.listen(port, function() {
    console.log(`listening on port ${port}`)
})