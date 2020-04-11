const express = require("express");
const router = express.Router();
const galleryItems = require("../modules/gallery.data");
const pool = require("../modules/pool");

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put("/like/:id", (req, res) => {
  const galleryId = req.params.id;
  for (const galleryItem of galleryItems) {
    if (galleryItem.id == galleryId) {
      galleryItem.likes += 1;
    }
  }
  res.sendStatus(200);
}); // END PUT Route

router.put("/clicked/:id", (req, res) => {
  const galleryId = req.params.id;
  for (const galleryItem of galleryItems) {
    if (galleryItem.id == galleryId) {
      if (galleryItem.isClicked == true) {
        galleryItem.isClicked = false;
      } else if (galleryItem.isClicked == false) {
        galleryItem.isClicked = true;
      }
    }
  }
  res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "gallery" ORDER BY "id";`;

  pool
    .query(queryText)
    .then((responseDB) => {
      const dbRows = responseDB.rows;
      console.table(dbRows);
      res.send(dbRows);
    })
    .catch((err) => {
      console.log("ERROR:", err);
      res.sendStatus(500);
    });
}); // END GET Route

module.exports = router;
