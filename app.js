import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("rss-app!");
});

app.listen(port, () => {
  console.log(`BN dev assessment app listening on port ${port}`);
});
