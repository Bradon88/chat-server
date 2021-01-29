const express = require('express')
const mc = require('./controllers/messages_controller')
const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

const port = 3001
app.listen(port, () => {
    console.log(`Server is on port ${port}`)
})

const messgaesBaseUrl = '/api/messages'
app.post(messgaesBaseUrl, mc.create)
app.get(messgaesBaseUrl, mc.read)
app.put(`${messgaesBaseUrl}/:id`, mc.update)
app.delete(`${messgaesBaseUrl}/:id`, mc.delete)

