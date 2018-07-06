const express = require('express');
const app = express();



app.get('/', (req, res) => {
  res.send('Backend in progress');
});
app.listen(process.env.PORT, function () {
  console.log(`Listening on ${process.env.PORT}`);
});