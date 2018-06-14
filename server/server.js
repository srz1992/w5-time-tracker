const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Router = require('./routes/router');
const Port = process.env.PORT || 5436;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/tracker', Router);
app.use(express.static('server/public'))

app.listen(Port, ()=>{
    console.log('listening on port:', Port);
    
})