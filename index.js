const express = require("express");
const app = express();

const PORT = 4000;

function onListen() {
  console.log(`Listening on :${PORT}`);
}

app.listen(PORT, onListen);
