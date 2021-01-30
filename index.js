const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json({extended:true}))

const PORT = config.get('PORT') || 5000

app.use('/admin',require('./routes/auth.routes'));

async function start(){
    try{

        await mongoose.connect(config.get('mongoURI'),{
            useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology:true
        })

        app.listen(PORT,()=>console.log('App has been started!'))

    }catch(e){
        console.log('Server erRor',e.message);
        process.exit(1);
    }
}

start();