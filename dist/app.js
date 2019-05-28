"use strict";

var _express = _interopRequireDefault(require("express"));

var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = process.env.PORT || 3000; // HANDLEBARS MIDDLEWARE

app.engine('handlebars', (0, _expressHandlebars["default"])({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.get('/', function (req, res) {
  res.render('home');
});
app.listen(PORT, function () {
  return console.log("Server is live at ".concat(PORT));
});