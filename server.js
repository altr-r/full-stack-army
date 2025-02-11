const express = require("express");

const app = express();
app.use(express.json());

const books = [
  {
    id: "1",
    name: "Personal Finance",
    price: 500,
  },
  {
    id: "2",
    name: "JavaScript for Dummies",
    price: 1500,
  },
  {
    id: "2",
    name: "JavaScript for Dummies Part 2",
    price: 1200,
  },
  {
    id: "2",
    name: "JavaScript for Dummies Part 3",
    price: 300,
  },
  {
    id: "2",
    name: "JavaScript for Dummies Part 4",
    price: 1800,
  },
];

app.get("/books", (req, res) => {
  if (req.query.show === "all") {
    return res.json(books);
  }

  if (req.query.price == "500") {
    const result = books.filter((book) => book.price <= 500);
    return res.json(result);
  }

  return res.json(books);
});

app.post("/books", (req, res) => {
  const book = req.body;
  books.push(book);

  res.json(books);
});

app.listen("8000", () => {
  console.log("Server is listening on port 8000");
});
