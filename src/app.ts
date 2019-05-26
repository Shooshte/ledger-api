import express from "express";

const app = express();
const port = 1337;

app.get("/", (req, res) => {
  res.send("The living proof that doing nothing pays.");
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
