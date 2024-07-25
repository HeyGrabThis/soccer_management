const express = require('express');
const path = require('path');
const app = express();
const { MongoClient } = require('mongodb');

// app.use(express.static(path.join(__dirname, '../client/build')));
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

let db;
const url =
  'mongodb+srv://qkqajrrhtj:dhzpdl6632@cluster0.4vycw4p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
new MongoClient(url)
  .connect()
  .then((client) => {
    console.log('DB연결성공');
    db = client.db('field');
    app.listen(8080, function () {
      console.log('listening on 8080');
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get('/', (req, res) => {
  res.send('루트');
});

// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });
