const mongoose = require('mongoose');
mongoose.connect(process.env.MONOGDB_URI || 'mongodb+srv://alexandernplace:R1s0kPcFa8NC6AZa@cluster0.6jrtobd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

module.exports = mongoose.connection
