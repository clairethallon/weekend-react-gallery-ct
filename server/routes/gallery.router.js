const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');

// modules
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
// router.put('/like/:id', (req, res) => {
//     console.log(req.params);
//     const galleryId = req.params.id;
//     for (const galleryItem of galleryItems) {
//         if (galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//         }
//     }
//     res.sendStatus(200);
// }); // END PUT Route

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


// // DELETE Route
// router.delete('/delete/:id', (req, res) => {
//     const queryString = `DELETE FROM galleryItems WHERE id='${req.params.id}';`;
//     pool.query(queryString).then((results) => {
//         res.sendStatus(200);
//     }).catch((error) => {
//         console.log(error);
//         res.sendStatus(500);
//     })
// }); // END DELETE Route

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