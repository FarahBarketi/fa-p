const mongoose = require('mongoose')


const connectDB =async()=>{
try {
    await mongoose.connect("mongodb+srv://farah:farah123@cluster0.eagwpus.mongodb.net/?retryWrites=true&w=majority")
    console.log ('db is connected')
} catch (error) {
    console.log ('failed ')
}
}
module.exports = connectDB