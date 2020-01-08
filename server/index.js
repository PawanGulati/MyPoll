require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const control = require('./controller')

const app = express()

//middleware
app.use(express.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.get('/', (req, res,next) => {
    next(Error('just a TEST'))
})

const port = process.env.PORT || 4000

//Error Handling 
app.use(control.notFound)
app.use(control.error)

app.listen(port, () => console.log(`Listing @${port}`))