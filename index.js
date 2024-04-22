const express = require('express');
const { spawn } = require('child_process');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors'); // Import the CORS middleware
const app = express();
const port = 8080;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
// Use CORS middleware
app.use(cors());

app.post('/track-info', (req, res) => {
  const csvData = req.body.csvData;
  // Write the received CSV data to a file
  try {
    fs.writeFile('track_info.csv', csvData, (err) => {
      if (err) {
        console.error('Error writing CSV file:', err);
        res.status(500).send('Error writing CSV file');
      } else {
        console.log('CSV file saved successfully');
        res.send('CSV file saved successfully');
      }
    });
  } catch (error) {
    console.error('Error writing CSV file:', error);
    res.status(500).send('Error writing CSV file');
  }
});

app.get('/save-tracks', (req, res) => {
  var dataToSend;
  // spawn new child process to call the python script
  const python = spawn('python', ['test.py']);
  // collect data from script
  python.stdout.on('data', function (data) {
    console.log('Pipe data from python script ...');
    dataToSend = data.toString();
    // send data to browser inside the callback
    res.send(dataToSend);
  });
  // in close event we are sure that stream from child process is closed
  python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
  });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
