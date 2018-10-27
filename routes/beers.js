var express = require('express');
var router = express.Router();
var beers = require('../controllers/beersController')

// GET all 
router.get('/', beers.index);
// Add form
router.get('/new', beers.new);
// GET one
router.get('/:id', beers.show);
// POST new beer
router.post('/', beers.create);
// DELETE beer
router.delete('/:id', beers.destroy);
// POST new comment to a beer
router.post('/:id/comments', beers.createComment);

module.exports = router;