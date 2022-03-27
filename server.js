const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/github-crawler'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/github-crawler/index.html'));});
app.listen(process.env.PORT || 8080);