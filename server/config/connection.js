const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks')

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
// }); update for mongoose 6.0

module.exports = mongoose.connection;
