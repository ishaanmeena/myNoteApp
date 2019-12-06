const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var toDoArray = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

app.post("/", function (req, res) {
    var toDo = req.body.toDo;
    toDoArray.push(toDo);
    res.redirect("/")
})


app.get("/", function (req, res) {
    var today = new Date();
    var currentDay = today.getDay();
    var currentDate = today.getDate();
    var currentMonth = today.getMonth();
    var currentYear = today.getFullYear();
    var day = "";
    var name = "";
    if (currentDay == 0)
        name = "Sunday";
    else if (currentDay == 1)
        name = "Monday";
    else if (currentDay == 1)
        name = "Tuesday";
    else if (currentDay == 1)
        name = "Wednesday";
    else if (currentDay == 1)
        name = "Thursday";
    else if (currentDay == 1)
        name = "Friday";
    else if (currentDay == 1)
        name = "Saturday";
    if (currentDay == 0 || currentDay == 6){
        day = "Weekend";
    }else
        day = "Weekday";
    res.render("list", {
        day: day,
        name: name,
        currentDate: currentDate,
        currentMonth: currentMonth,
        currentYear:currentYear,
        toDoArray: toDoArray
    })
});

app.listen(3000, function(){
    console.log("Server Started @ Port:3000")
})