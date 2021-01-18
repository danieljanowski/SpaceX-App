export default (req, res) => {
  res.statusCode = 200;
  res.json({ path: req.url });
};
