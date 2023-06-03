const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const sauceCrtl = require("../controllers/sauce");


// POST 
router.post('/', auth, multer, sauceCrtl.createSauce);
// GET
router.get('/:id', auth, sauceCrtl.getOneSauce);
// GET
router.get('/', auth, sauceCrtl.getAllSauce);
// PUT 
router.put('/:id', auth, multer, sauceCrtl.modifySauce);
 // DELETE 
router.delete('/:id', auth, sauceCrtl.deleteSauce);

router.post('/:id/like', auth, sauceCrtl.likeOrDislike); 

module.exports = router;