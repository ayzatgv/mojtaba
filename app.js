const express = require('express');
const app = express();

const port = 8080;


app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
