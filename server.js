const express = require("express");
const path = require("path");
const app = express();
const list = require("./list.json");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//load view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
//home route
app.get("/", function(req, res){
    res.render("index", {
        items:list,
    });
});

app.post('/add', function(req, res){

})

app.get('/add', function(req, res){
    list.push(Date())
})

app.listen(3000);