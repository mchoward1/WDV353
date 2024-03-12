const express = require('express');
const router = express.Router();
const {v4: uuidv4} = require('uuid');

const birthdays = [];



//localhost:3000/api
router.get('/', (req, res) => {
    res.status(200).json({
        message: 'GET to API',
        data: birthdays,
        metadata: {hostname: req.hostname, method: req.method},
    });
});

//localhost:3000/api/whateverfollows
router.get('/:id', (req,res) => {
    const {id} = req.params.id;
    const birthday = birthdays.find((birthday => birthday.id == req.params.id));
    res.status(200).json({
        message: 'Get by ID to /api',
        id: birthday,
        metadata: {hostname: req.hostname, method: req.method},
    });
});

//Will need {"data": {"name": "Michael", "Birthday": "Feb, 11"}} in Postman body
router.post('/', (req,res) => {
    const {data} = req.body;
    birthdays.push({id: uuidv4(), ...data});
    console.log('Birthdays: ', birthdays)
    res.status(201).json({
        message: 'POST to /api',
        data: birthdays[birthdays.length - 1],
        metadata: {hostname: req.hostname, method: req.method},
    });
});

router.put('/:id', (req,res) => {
    const {id} = req.params.id;
    const {data} = req.body;
    const birthday = birthdays.find((birthday => birthday.id == req.params.id));
    birthdays.splice(birthday);
    birthdays.push({birthday, ...data});
    res.status(201).json({
        message: 'PUT by ID to /api',
        data: birthdays,
        matadata: {hostname: req.hostname, method: req.method},
    });
});

router.delete('/:id', (req,res) => {
    const {id} = req.params.id;
    const birthday = birthdays.findIndex((birthday => birthday.id == req.params.id));
    birthdays.splice(birthday);
    res.status(200).json({
        message: 'Get by ID to /api',
        id: birthdays,
        metadata: {hostname: req.hostname, method: req.method},
    });
});

module.exports = router;