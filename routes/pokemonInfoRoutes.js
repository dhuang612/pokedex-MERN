module.exports = app => {
  app.post('/pokemon', async (res, req) => {
    console.log(req.body);
  });
};
