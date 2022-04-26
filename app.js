const express = require("express");

const app = express();

app.get("/", (request, response) => {
  const todayDate = new Date();
  //   console.log(todayDate);
  const day = todayDate.getDate();
  const month = todayDate.getMonth() + 1;
  const year = todayDate.getFullYear();

  response.send(`${day}-${month}-${year}`);
});

// app.listen(3000, () => {
//   console.log("server running at http://localhost:3000");
// });

module.exports = app;
