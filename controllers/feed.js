exports.getPosts = (req, res, next) => {
  res.json({
    posts: [
      {
        id: 1,
        title: 'Titolo 1',
        description: 'description'
      },
      {
        id: 2,
        title: 'Titolo 1',
        description: 'description'
      },
      {
        id: 3,
        title: 'Titolo 1',
        description: 'description'
      }
    ],
    test: 'test'
  });
};

exports.createPosts = (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;

  // ID to save in DB
  const ID = 1234; 
  res.json({
    messages: 'Success operation',
    post: {
      id: ID,
      title: title,
      description: description
    }
  });
};

