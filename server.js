const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(cors({ origin: true, credentials: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World",
  });
});

app.get("/:salary", async (req, res) => {

  let { salary } = req.params;

  salary = parseInt(salary);

  console.log(salary);

  // take the salary maybe  4000k  a month  would be 4000/12 and a day 40000/260   and a week would be 40000/5

  const day = salary / 260;
  
  const week = salary / 5;
  
  const month = salary / 12;


  res.status(200).json({
    message: "this is your salary 💸 in : ",
    Day: "$" + day,
    Week: "$" + week,
    month: "$" + month,
  });
});

app.listen(3000);
