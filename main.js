const express = require('express');
const router = express.Router();

// define templates folder
var templates = (__dirname +'/templates');

// define the home page route
router.get('/', function (req, res) {
  var templateVariables = {
    'text': "Main Page"
  }
  res.render(templates + '/main', templateVariables);
})

module.exports = router
