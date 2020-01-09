const router = require('express').Router() 

const control = require('../controller')

router.post('/register',control.register)
router.post('/login',control.login)

module.exports = router