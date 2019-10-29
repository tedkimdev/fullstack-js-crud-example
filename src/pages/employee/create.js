import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import AppLayout from '../../components/app-layout.component'

const CreateEmployee = () => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [profession, setProfession] = useState('');
  const [color, setColor] = useState('');
  const [city, setCity] = useState('');
  const [branch, setBranch] = useState('');
  const [assigned, setAssigned] = useState(false);
  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      profession,
      code,
      color,
      branch,
      assigned,
      city
    })
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeCode = (e) => {
    setCode(e.target.value);
  };
  const onChangeProfession = (e) => {
    setProfession(e.target.value);
  };
  const onChangeColor = (e) => {
    setColor(e.target.value);
  };
  const onChangeCity = (e) => {
    setCity(e.target.value);
  };
  const onChangeBranch = (e) => {
    setBranch(e.target.value);
  };
  const onChangeAssigned = (e) => {
    setAssigned(e.target.checked);
  };
  

  return (
    <>
      <Head>
        <title>Plexxis Exercise</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
      </Head>
      <AppLayout>
        <Form style={{ padding: 10 }}>
          <Form.Group controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control value={name} onChange={onChangeName} />
          </Form.Group>

          <Form.Group controlId="formGridCode">
            <Form.Label>Code</Form.Label>
            <Form.Control value={code} onChange={onChangeCode} />
          </Form.Group>

          <Form.Group controlId="formGridProfession">
            <Form.Label>Profession</Form.Label>
            <Form.Control value={profession} onChange={onChangeProfession} />
          </Form.Group>

          <Form.Group controlId="formGridColor">
            <Form.Label>Color</Form.Label>
            <Form.Control value={color} onChange={onChangeColor} />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control value={city} onChange={onChangeCity} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridBranch">
              <Form.Label>Branch</Form.Label>
              <Form.Control value={branch} onChange={onChangeBranch} />
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridAssigned">
            <Form.Check type="checkbox" label="Assigned" checked={assigned} onChange={onChangeAssigned} />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={onSubmit}>
            Save
          </Button>
        </Form>

        {/* "id": 1,
    "name": "Kyle Lowry",
    "code": "F100",
    "profession": "Drywall Installer",
    "color": "#FF6600",
    "city": "Brampton",
    "branch": "Abacus",
    "assigned": true */}
      </AppLayout>
    </>
  );
};

export default CreateEmployee;
