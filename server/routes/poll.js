const router = require('express').Router()

const control = require('../controller')
const auth = require('../middleware/auth')

// showPolls n createPolls '/api/polls/'
router.route('/')
    .get(control.showPolls)
    .post(auth, control.createPolls)

module.exports = router