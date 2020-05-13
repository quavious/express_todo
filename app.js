//jshint esversion:6

const express = require('express');
const parser = require('body-parser')

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
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    var today = new Date().getDay()
    res.render("index", {thisDay : days[today]})
})

app.listen(3000, () => {
    console.log("server on port 3000")
})