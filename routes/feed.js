const express = require('express');
const router = express.Router();

const feedController = require('../controllers/feed');

// define my endpoint
router.get('/posts', feedController.getPost);

module.exports = router;
