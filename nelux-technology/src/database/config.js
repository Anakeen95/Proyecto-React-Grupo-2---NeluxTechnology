const mongoose= require('mongoose');
require('dotenv').config();

const DATABASE= process.env.DATABASE_URL;

const connect= async () => {
    try{
        await mongoose.connect(DATABASE)
        console.log('conectado')
    }
    catch (error){
        console.log(error)
    }
}


connect()

module.exports = mongoose;