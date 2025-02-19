const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello, world!');
    })
    .catch(err => {
      console.error('Error in / route:', err);
      res.status(500).send('Internal Server Error');
    });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Simulate an asynchronous operation that might fail
function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a potential error
    const shouldFail = Math.random() < 0.5; 
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error('Simulated asynchronous error'));
      } else {
        resolve();
      }
    }, 100);
  });
}