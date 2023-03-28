const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Database up and ready to use')
    } catch (error) {
        console.log(error);
        throw new Error('Something went wrong trying to rise database');
    }
}

module.exports = {
    dbConnection
}