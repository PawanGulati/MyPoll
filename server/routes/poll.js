const router = require('express').Router()

const control = require('../controller')
const auth = require('../middleware/auth')

// showPolls n createPolls '/api/polls/'
router.route('/')
    .get(control.showPolls)
    .post(auth, control.createPolls)

//userPolls '/api/polls/user'
router.route('/user')
    .get(auth , control.userPolls)    

// showPoll, DeletePoll, Vote '/api/polls/:id'
router.route('/:id')
    .get(control.showPoll)
    .post(auth, control.vote)
    .delete(auth, control.DeletePoll)


module.exports = router