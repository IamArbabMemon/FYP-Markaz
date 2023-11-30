const {userProfileRouter} = require('./routes/userProfileRoute.js');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

app.use('/user',userProfileRouter);


try{
 mongoose.connect('mongodb://127.0.0.1:27017/AccessStore')   
app.listen(3000,()=>{
    console.log('Server is listening');
});
}catch(err){
    console.log(err);
}



