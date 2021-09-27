const mongoose = require('mongoose');


async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log('ket noi mongoDB thanh cong')
    } catch (error) {
        console.log('ket noi that bai')
        
    }
}

module.exports = { connect }
