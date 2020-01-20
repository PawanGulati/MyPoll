require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const control = require('./controller')
const db = require('./models')
const routes = require('./routes')

const app = express()

//cors middleware
app.use(cors())

//middleware
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
//routes middleware
app.use('/api/auth', routes.auth)
app.use('/api/polls', routes.polls)

app.get('/', (req, res, next) => {
    // next(Error('just a TEST'))
    res.send('hello')
})

const port = process.env.PORT || 4000

//Error Handling 
app.use(control.notFound)
app.use(control.error)

app.listen(port, () => console.log(`Listing @${port}`))