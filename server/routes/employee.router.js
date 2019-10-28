const express = require('express');
const db = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
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

router.get('/:id', async (req, res) => {
})

router.post('/', async (req, res) => {
})

router.put('/', async (req, res) => {
})

router.delete('/:id', async (req, res) => {
})

module.exports = router;