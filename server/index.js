require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

//middleware
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/' , (req,res)=>{
    res.json({
        "hello": "world"
    })
})

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`Listing @${port}`))