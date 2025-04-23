const express = require('express')
const { climaController } = require('./controllers/obteniendoClima')
const app = express()


app.get('/', climaController) 



app.listen(3001, () => {
    console.log('servidor escuchando')
})