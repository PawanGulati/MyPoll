require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const enforce = require('express-sslify')

const control = require('./controller')
const db = require('./models')
const routes = require('./routes')

const app = express()

if(process.env.NODE_ENV === 'production') app.use(enforce.HTTPS({trustProtoHeader:true}))

//cors middleware
app.use(cors())

//middleware
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

//defining service worker for PWA implementation 
app.get('/service-worker.js',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'..','build','service-worker.js'))
})

//routes middleware
app.use('/api/auth', routes.auth)
app.use('/api/polls', routes.polls)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))

    app.get('*',(req,res) =>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

// app.get('/', (req, res, next) => {
//     // next(Error('just a TEST'))
//     res.send('! server working test !')
// })

const port = process.env.PORT || 4000

//Error Handling 
app.use(control.notFound)
app.use(control.error)

app.listen(port, () => console.log(`Listing @${port}`))