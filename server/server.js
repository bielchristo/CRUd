const express = require('express')
const path = require('path')
const app = express()
const router = require('./routes/route.js')

const PORT = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router)
app.use(express.static('../build/bundle.js'))
// handle route errors
app.use('*', (req, res) => res.send(404));

// handle global errors
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error!!',
    status: 500,
    message: { err: 'App.use detected an error.' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});



app.listen(PORT, () => console.log('listening on port ' + PORT))

module.exports = app;