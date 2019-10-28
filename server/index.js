const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const db = require('./models');
const employeeRouter = require('./routes/employee.router');

const app = express();
db.sequelize.sync();

app.use(morgan('dev')); // log
// to use req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use('/api/employees', employeeRouter);

app.listen(8080, () => console.log('Job Dispatch API running on port 8080!'))