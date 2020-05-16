//jshint esversion:6

const express = require('express');
const parser = require('body-parser')
const {returnDate, returnDay} = require(__dirname + '/date.js')

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

const days = {
    0 : "Sunday",
    1 : "Monday",
    2 : "Thusday",
    3 : "Wednesday",
    4 : "Thursday",
    5 : "Friday",
    6 : "Saturday"
}

const app = express()
app.use(parser.urlencoded({extended: true}))
app.use(express.static("public"))
app.set('view engine', 'ejs')


app.post("/", (req, res) => {
    let item = req.body.name; //요청만 보내고 다시 원 루트 페이지로 리다이렉트
    if(req.body.list === "Work") {
        workItems.push(item)
        res.redirect("/work")
    } else {
        items.push(item);
        res.redirect("/")
    }
})

app.get("/", (req, res) => {

    res.render("index", {listTitle : returnDate(), newListItems: items})
})

app.post("/work", (req, res) => {
    let item = req.body.name; //요청만 보내고 다시 원 루트 페이지로 리다이렉트
    workItems.push(item);

    res.redirect("/work")
})

app.get("/work",(req, res) => {
    res.render("index", {listTitle: "Work List", newListItems: workItems})
})

app.get("/about",(req, res) => {
    res.render("about", {})
})


app.listen(3000, () => {
    console.log("server on port 3000")
})

