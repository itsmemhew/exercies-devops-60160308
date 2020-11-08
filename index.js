const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const singers = [
    {id: '1', name: 'NCT'},
    {id: '2', name: 'Got7'}
]

app.get('/', (req, res) => {
    return res.send('Hello!')
})

app.get('/item', (req, res) => {
    return res.json(singers)
})

app.listen(port, () => {
    console.log(`Start Express application at ${port}`)
})

module.exports = app