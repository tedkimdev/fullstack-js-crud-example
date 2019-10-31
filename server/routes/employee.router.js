const express = require('express');
const db = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
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
  try {
    const employee = await db.Employee.findOne({ where: { id: req.params.id } });
    if (!employee) {
      return res.status(404).json({ status: 'error', mesage: 'Employee not found'})
    }
    return res.json(employee);
  } catch(e) {
    console.error(e);
    res.status(500).json({ status: 'error', mesage: 'Internal server error'});
  }
})

router.post('/', async (req, res) => {
  try {
    // TODO: validate
    const employee = await db.Employee.create(req.body)

    return res.json(employee);
  } catch(e) {
    console.error(e);
    res.status(500).json({ status: 'error', mesage: 'Internal server error'});
  }
})

router.put('/:id', async (req, res) => {
  try {
    const employeeId = req.params.id
    const { name, code, profession, color, city, branch, assigned } = req.body
    
    let employee = await db.Employee.findOne({
      where: {
        id: employeeId
      }
    })
    if (!employee) {
      return res.status(404).json({ status: 'error', mesage: 'Employee not found'})
    }
    const attributes = {
      name, code, profession, color, city, branch, assigned
    }

    // keep existing if not provided
    if (!name) {
      attributes.name = employee.name
    }
    if (!code) {
      attributes.code = employee.code
    }
    if (!profession) {
      attributes.profession = employee.profession
    }
    if (!color) {
      attributes.color = employee.color
    }
    if (!city) {
      attributes.city = employee.city
    }
    if (!branch) {
      attributes.branch = employee.branch
    }
    if (!assigned) {
      attributes.assigned = employee.assigned
    }

    employee = await employee.update(attributes)
    return res.json(employee);
  } catch(e) {
    console.error(e);
    res.status(500).json({ status: 'error', mesage: 'Internal server error'});
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const employee = await db.Employee.findOne({ where: { id: req.params.id } });
    if (!employee) {
      return res.status(404).json({ status: 'error', mesage: 'Employee not found'})
    }
    await db.Employee.destroy({ where: { id: req.params.id } });
    res.send(req.params.id);
  } catch (e) {
    console.error(e);
    res.status(500).json({ status: 'error', mesage: 'Internal server error'});
  }
})

module.exports = router;