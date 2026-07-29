const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/data", (req, res) => {
  const dummy = [
    {
      username: "vishal",
      city: "CHD",
      age: 30,
    },
  ];

  res.json({ data: dummy });
});

app.listen(8000, () => {
  console.log("Server is running at 8000");
});