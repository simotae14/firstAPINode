exports.getPost = (req, res, next) => {
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
