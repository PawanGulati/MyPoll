module.exports = {
    ...require('./auth'),
    ...require('./polls')
}

module.exports.notFound = (req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
}

module.exports.error = (err, req, res, next) => {
    // return res.status(err.status || 500).send(err.message || 'Something went wrong!!')
    return res.status(err.status || 500).json({
        success: false,
        error: {
          message: err.message || 'Something went wrong.',
        },
      });
}