const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const entryRouter = require('./routes/entry-router');
const Port = process.env.PORT || 5436;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/entry', entryRouter);
app.use(express.static('server/public'))

app.listen(Port, ()=>{
    console.log('listening on port:', Port);
    
})