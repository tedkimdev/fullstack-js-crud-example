const express = require('express');
const cors = require('cors');

const app = express();
const db = require('./models');
db.sequelize.sync();

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.get('/api/employees', async (req, res, next) => {
  console.log('/api/employees');
  let employees = await db.Employee.findAll();
  
  // delete
  employees = employees.map(employee => ({
    id: employee.id,
    name: employee.name,
    code: employee.code,
    profession: employee.profession,
    color: employee.color,
    city: employee.city,
    branch: employee.branch,
    assigned: employee.assigned
  }))

  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.send(JSON.stringify(employees, null, 2));
})

app.listen(8080, () => console.log('Job Dispatch API running on port 8080!'))