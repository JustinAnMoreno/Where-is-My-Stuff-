function index(req, res) {
  res.render("index", {title:"Add Movie"});
}

// inside of controllers/index.js
module.exports = {
  index,
};
