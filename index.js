const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;
const Gbooks = require('./books');

const corsOptions = {
  origin: 'http://localhost:3000',
};
app.use(cors(corsOptions));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.get('/books', (req, res) => {
  res.send(Gbooks)
})

app.get('/books/:id', (req, res) => {
  const book = Gbooks.find((b) => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).send('The book with the given ID was not found.');
  }
  res.send(book);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})