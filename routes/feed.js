const express = require('express');
const { body, query } = require('express-validator');
const router = express.Router();

const feedController = require('../controllers/feed');

// NO AUTH
// GET ALL /feed/posts
router.get('/posts', feedController.getPosts);
// GET /feed/post/:id
// POST /feed/post
router.post('/post',
  [
    body('title').trim()
      .isLength({ min: 3 }).withMessage('Titolo maggiore di 3 caratteri')
      .exists().withMessage('Titolo è richiesto'),
    body('description').trim().isLength({ min: 5 }).withMessage('Description maggiore di 5 caratteri')
  ],
feedController.createPosts);
// PUT /feed/post/:id to update a post
// DELETE /feed/post/:id
// POST /feed/post/:id/like to add a like

// POST /user/login
// POST /user/register
// GET /user/me profile user
// PUT /user/me to update profile user verification permits

module.exports = router;
