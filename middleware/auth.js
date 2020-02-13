const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    try {        
        if (req.headers['authorization']) {
            const token = req.headers['authorization'].split(' ')[1]
            
            const user = await jwt.verify(token, process.env.SECRET_KEY)

            if (user) {
                req.user = user
                req.token = token //will see if used
            }
        } else {
            throw new Error('Failed to authenticate')
        }
        next()
    } catch (err) {
        next(Error('Failed to authenticate'))
    }
}