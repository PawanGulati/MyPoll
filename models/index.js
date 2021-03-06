const mongoose = require('mongoose')

module.exports.User = require('./user')
module.exports.Poll = require('./poll')

mongoose.set('debug', true)
mongoose.Promise = global.Promise

mongoose.connect(process.env.MONGOURI, {
    useMongoClient: true,
})