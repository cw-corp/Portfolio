const express = require("express");
const morgan = require("morgan");
const path = require('path');
var PORT = 3000 || process.env.PORT;

var app = express();


app.use(morgan("dev"));
app.use(express.static(__dirname + '/../public'));

app.get("/", (req, res) => {
   res.sendFile(path.join(__dirname + '/index.html'))
});

// app.get('/about', (req, res) => {
//     res.send('about-page');
// });

app.listen(PORT, () => console.log(`server is listening to PORT ${PORT}`));


