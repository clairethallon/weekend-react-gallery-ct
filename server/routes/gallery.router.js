const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for (const galleryItem of galleryItems) {
        if (galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// DELETE Route
router.delete('/delete/:id', (req, res) => {
    const queryString = `DELETE FROM galleryItems WHERE id='${req.params.id}';`;
    pool.query(queryString).then((results) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
}); // END DELETE Route

// GET Route
router.get('/', (req, res) => {
    res.send(galleryItems);
}); // END GET Route

module.exports = router;