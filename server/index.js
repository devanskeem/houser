require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')

const app = express()

app.use(express.json())
app.use(session({
    
}))