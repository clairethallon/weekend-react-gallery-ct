const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');

// modules
const pool = require('../modules/pool');


// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    let queryString = `UPDATE "gallery_items" SET likes ='${req.body.likes}' WHERE id=${req.params.id};`;
    pool.query(queryString).then((results) => {
        res.sendStatus(200);
    }).catch((results) => {
        console.log('error in PUT');
        res.sendStatus(500);
    })
});// END PUT Route

//POST Route
router.post('/', (req, res) => {
    console.log(req.body);
    let queryString = 'INSERT INTO "gallery_items" (path, description, likes) VALUES($1, $2, $3)';
    let values = [req.body.path, req.body.description, req.body.likes];
    pool.query(queryString, values).then((results) => {
        res.sendStatus(201);
    }).catch((results) => {
        console.log('error in PUT');
        res.sendStatus(500);
    })
});// END PUT Route


// DELETE Route
router.delete('/delete/:id', (req, res) => {
    console.log(req.params);
    const queryString = `DELETE FROM "gallery_items" WHERE id='${req.params.id}';`;
    pool.query(queryString).then((results) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
}); // END DELETE Route

// GET Route
router.get('/', (req, res) => {
    const queryString = 'SELECT * FROM gallery_items ORDER BY id DESC';
    pool.query(queryString).then((results) => {
        res.send(results.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
}); // END GET Route

module.exports = router;