const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res)=>{
    console.log('getting project rows from projects');
    let queryText = `SELECT projects.id, projects.project, SUM(hours) from junction_table JOIN tasks on junction_table.task_id = tasks.id JOIN projects on junction_table.project_id = projects.id GROUP BY projects.id;`
    pool.query(queryText)
    .then((result)=>{
        console.log('back from database with:', result);
        res.send(result.rows)
    }).catch((error)=>{
        console.log('error getting projects:', error);
        res.sendStatus(500);
    })
})

router.post('/', (req, res)=>{
    let project = req.body.project;
    console.log('project is:', project);
    
    let queryText = `INSERT INTO projects (project) VALUES ($1)`
    pool.query(queryText, [project])
    .then((result)=>{
        console.log('back from server with result:', result);
        res.sendStatus(201);
    }).catch((error)=>{
        console.log('error posting into projects table:', error);
        res.sendStatus(500);
    })
})

router.delete('/:id', (req, res)=>{
    console.log('in project delete request');
    let id = req.params.id;
    let queryText = `DELETE FROM projects WHERE id=$1`
    pool.query(queryText, [id])
    .then((result)=>{
        console.log('deleted from database:', result); 
        res.sendStatus(200); 
    }).catch((error)=>{
        console.log('error deleting from database:', error);
        res.sendStatus(500);  
    })
})

module.exports = router;