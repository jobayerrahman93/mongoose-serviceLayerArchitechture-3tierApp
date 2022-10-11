const express = require('express');
const employeeRouter = require('./routes/v1/employee.route');
const app = express();

// middleware
app.use(express.json());

app.use('/api/v1/employee',employeeRouter)

app.get('/', (req, res) => {
  res.send('<h1>Server is running ...</h1>')
});


module.exports= app;
