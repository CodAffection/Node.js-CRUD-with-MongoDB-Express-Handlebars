const mongoose = require('mongoose')

const dbUri = 'your-mongo-db-url'


module.exports = () => mongoose.connect(dbUri)