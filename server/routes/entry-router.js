const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res)=>{
    console.log('getting task database rows from tasks');
    const queryText = `Select task, tasks.id, project_id, date, start_time, end_time, hours, project FROM tasks JOIN projects ON tasks.project_id = projects.id;`;
    pool.query(queryText)
    .then((result) =>{
        res.send(result.rows);
    }).catch((error)=>{
        console.log('error getting tasks:', error);
        res.sendStatus(500);
    })
})

router.post('/', (req, res)=>{
    console.log('in post to create new entry with:', req.body);
    let task = req.body.task;
    let project_id = req.body.project_id;
    let date = req.body.date;
    let start_time = req.body.startTime;
    let end_time = req.body.endTime;   
    let hours = req.body.hours; 
    const queryText = `INSERT INTO tasks (task, project_id, date, start_time, end_time, hours) VALUES ($1, $2, $3, $4, $5, $6)`
    pool.query(queryText, [task, project_id, date, start_time, end_time, hours])
    .then((result)=>{
        console.log('back from db with:', result);
        res.sendStatus(201)
    }).catch((error)=>{
        console.log('error inserting into database:', error);
        res.sendStatus(500);
    })
})


router.delete('/:id', (req, res)=>{
    console.log('in task entry delete request:', req.params);
    let id = req.params.id;
    let queryText = `DELETE from tasks WHERE id=$1`;
    pool.query(queryText, [id])
    .then(function(response){
        console.log('deleted from database:', response); 
        res.sendStatus(200); 
    }).catch(function(error){
        console.log('error deleting from database:', error);
    res.sendStatus(500);        
    })
    
})

module.exports = router;