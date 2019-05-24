require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env
const house_ctrl = require('./controllers/house_controller')
const app = express()

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000*60*60
    }
}))

app.get('/api/houses', house_ctrl.getHouses)
app.post('/api/add', house_ctrl.addHouse)
app.post('/api/delete/:id', house_ctrl.deleteHouse)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('database set')
})

app.listen(SERVER_PORT, () => {
    console.log(`listening on port ${SERVER_PORT}` )
})