const express = require('express'); 
const router = express.Router();
const uuid = require('uuid/v4');
const fs = require('fs');

const DATAPATH = './data/';
const FILENAME = 'media.json';

// Helper function to read file
function getData(path) {
    const rawData = fs.readFileSync(path);
    const data = JSON.parse(rawData);
    return data;
}

// GET all Media Items
router.get('/', (req, res) => {
    const data = getData(DATAPATH + FILENAME);
    return res.send(data);
});

// POST a new Media Item
router.post('/', (req, res) => {
    const newItem = req.body;
    let data = getData(DATAPATH + FILENAME);
    const id = uuid();
    let payload = req.body;

    payload.id = id;
    data[id] = payload; 
    fs.writeFileSync(DATAPATH + FILENAME, JSON.stringify(data));
    return res.send(payload);
});

// GET an individual Media Item by ID
router.get('/:mediaId', (req, res) => {
    const data = getData(DATAPATH + FILENAME);
    const item = data[req.params.mediaId];

    return res.send(item);
});

// PUT update an individual Media Item by ID
router.put('/:mediaId', (req, res) => {
    let data = getData(DATAPATH + FILENAME);
    const item = data[req.params.mediaId];
    const payload = req.body;

    data[req.params.mediaId] = payload;
    return res.send(payload);
});

// DELETE an individual Media Item by ID
router.delete('/:mediaId', (req, res) => {
    const data = getData(DATAPATH + FILENAME);
    const id = req.params.mediaId;

    delete data[id];
    fs.writeFileSync(DATAPATH + FILENAME, JSON.stringify(data));
    return res.send(data);
});

module.exports = router;