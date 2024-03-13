import express from "express";
const app = express();
const PORT = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello, Server is working fine");
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});

app.use(express.static("public"));
