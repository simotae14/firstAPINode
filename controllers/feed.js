const { validationResult } = require('express-validator');

exports.getPosts = (req, res, next) => {
  res.json({
    posts: [
      {
        id: 1,
        title: 'Titolo 1',
        description: 'description',
        image: 'images/1.jpeg',
        author: {
          name: 'Simone'
        },
        creation_date: new Date()
      },
      {
        id: 2,
        title: 'Titolo 1',
        description: 'description',
        image: 'images/1.jpeg',
        author: {
          name: 'Simone'
        },
        creation_date: new Date()
      },
      {
        id: 3,
        title: 'Titolo 1',
        description: 'description',
        image: 'images/1.jpeg',
        author: {
          name: 'Simone'
        },
        creation_date: new Date()
      }
    ],
    test: 'test'
  });
};

exports.createPosts = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: 'Errore input',
      error: errors.array()
    });
  }
  const title = req.body.title;
  const description = req.body.description;

  // ID to save in DB
  const ID = 1234;
  res.status(201).json({
    messages: 'Success operation',
    post: {
      id: ID,
      title: title,
      description: description
    }
  });
};

