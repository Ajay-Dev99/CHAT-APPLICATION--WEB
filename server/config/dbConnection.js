const mongoose = require('mongoose')

const mongoURL = process.env.MONGO_URL


module.exports = () => {
    mongoose.connect(mongoURL).then(() => {
        console.log('db connection successull');
    }).catch((err) => console.log(err))
}