var express = require('express');

app = express();

app.get('/', function (req, res) {
    res.send("Home Page!");
})

app.put('/about', function (req, res) {
    res.send("About Page!");
})

app.post('/contact', function (req, res) {
    res.send("Contact Page!");
})
app.put('/terms', function (req, res) {
    res.send("Terms Page!");
})


app.listen(9000, function () {
    console.log("Server Run Success");
})
