const Fruit = require("./models/fruit");
const express = require("express");
const PORT = process.env.PORT || 3000;
const db = require("./db/index");



const app = express();

db.on("error", console.error.bind(console, "MongoDB connection error"));

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
});

app.get('/', (req, res) => {
  res.json('pong')
})

app.get('/greet/:name', async (req, res) => {
  try {
    const { name } = req.params;
    res.send("Why hello there, " + name + "!");
  } catch(e) {
    console.log(e);
    res.send("Produc not found")
  }
})


app.get('/five', async (req, res) => {
  try {
    let array = [];
    for (let i = 1; i < 6; i++) {
        array.push(i);
    }
    res.json(array);
  } catch(e) {
    console.log(e);
    res.send("Produc not found")
  }
})

app.get('/evens/:n', async (req, res) => {
  try {
    const { n } = req.params;
    const evenNumber = parseInt(n)

    let array = [];
    for (let i = 0; i < evenNumber; i++) {
      if (i % 2 === 0) {
        array.push(i);
      }
    }
    res.json(array);
  } catch(e) {
    console.log(e);
    res.send("Produc not found")
  }
})


app.get('/namelength/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const nameLength = name.length;

    res.json(nameLength);
  } catch(e) {
    console.log(e);
    res.send("not found")
  }
})


