const express = require('express')
const app = express()

const apiKey = '53dac6540e0415b3b1220288a68ed60e'

app.get('/', async (req, res) => {
    const response = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=53dac6540e0415b3b1220288a68ed60e')
    const results = await response.json()
    const resClima = results.map((result) => {

    return {
        city: result.name,
        latitud: result.lat,
        state: result.state
    }
})
res.send(resClima)
})



app.listen(3001, () => {
    console.log('servidor escuchando')
})