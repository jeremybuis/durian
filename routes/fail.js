module.exports = (req, res) => {
  const userURL = req.query.url;
  res.redirect(userURL);
};
