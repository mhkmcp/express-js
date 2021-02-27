var express = require('express');

app = express();

app.get('/', function (req, res) {
    res.send("Hello Home!");
})

app.listen(9000, function () {
    console.log("Server Run Success");
})
