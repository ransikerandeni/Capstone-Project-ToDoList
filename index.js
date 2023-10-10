import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var arrayInputs = [];
var arrayInputs2 = [];
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs", {displayItems: arrayInputs});
});

app.get("/workToDo", (req, res) => {
    res.render("workToDo.ejs", {displayItems2: arrayInputs2});
});

app.post("/submitBtn1", (req, res) => {
    var inputField1 = req.body["inputField1"];
    arrayInputs.push(inputField1);
    console.log(`Input Field1 = ${inputField1}, Array of Inputs = ${arrayInputs}`);
    res.render("index.ejs", {displayItems: arrayInputs});
});

app.post("/submitBtn2", (req, res) => {
    var inputField2 = req.body["inputField2"];
    arrayInputs2.push(inputField2);
    console.log(`Input Field2 = ${inputField2}, Array of Inputs = ${arrayInputs2}`);
    res.render("workToDO.ejs", {displayItems2: arrayInputs2});
});

app.listen(port, () => {
    console.log(`Listening on the port ${port}`)
})