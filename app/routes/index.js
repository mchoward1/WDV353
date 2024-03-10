const express = require('express');
const router = express.Router();

//localhost:3000/api
router.get('/', (req, res) => {
    res.status(200).json({
        message: 'GET to API',
        metadata: {hostname: req.hostname, method: req.method},
    });
});

//localhost:3000/api/whateverfollows
router.get('/:id', (req,res) => {
    const {id} = req.params;
    res.status(200).json({
        message: 'Get by ID to /api',
        id,
        metadata: {hostname: req.hostname, method: req.method},
    });
});

router.post('/', (req,res) => {
    const {data} = req.body;
    res.status(201).json({
        message: 'POST to /api',
        data,
        metadata: {hostname: req.hostname, method: req.method},
    });
});

router.put('/:id', (req,res) => {
    const {id} = req.body;
    res.status(201).json({
        message: 'PUT by ID to /api',
        id,
        matadata: {hostname: req.hostname, method: req.method},
    });
});

router.delete('/:id', (req,res) => {
    const {id} = req.params;
    res.status(200).json({
        message: 'DELETE by ID from /api',
        id,
        metadata: {hostname: req.hostname, method: req.method},
    });
});

module.exports = router;