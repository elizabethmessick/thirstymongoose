var express = require('express');
var router = express.Router();
var bars = require('../controllers/barsController')

// GET all 
router.get('/', bars.index);
// Add form
router.get('/new', bars.new);
// GET one
router.get('/:id', bars.show);
// POST new bar
router.post('/', bars.create);
// POST new beer to a bar
router.post('/:id/beers', bars.addBeer);
// Remove beer from bar (and vice versa)
router.delete('/:barId/beers/:beerId', bars.removeBeer);
//  DELETE bar
router.delete('/:id', bars.destroy);


module.exports = router;