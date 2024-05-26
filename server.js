const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.cookie("myCookie", "value", {
    sameSite: "None",
    secure: true, // HTTPSが必須
    httpOnly: true,
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7日間有効
  });
  res.send("Cookie set");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
