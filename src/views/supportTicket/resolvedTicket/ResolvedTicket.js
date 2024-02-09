import { Row, Col, Table } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import React from 'react'

const ResolvedTicket= () => {



  return (
    <div>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='fw-bold h3'>Complaints</Navbar.Brand>
      </Container>
    </Navbar>
    <Navbar expand="lg" className="bg-dark">
        <Container fluid>
          <Navbar.Brand href="#" className="text-light">
            Search
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className='bg-light' />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex m-1">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 p-2 fw-medium"
                aria-label="Search"
              />
              <Button className="btn btn-danger fw-medium">Refresh</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="shadow p-3 mb-5 bg-white rounded">
        <Container>
          <Row>
            <Col md={4} sm={12} className="text-center p-2">
              <div>
                {' '}
                <label className="p-2 h6">Starting Date</label>
              </div>

              <div>
                <input type="date" className="rounded fw-bold" />
              </div>
            </Col>
            <Col md={4} sm={12} className="text-center p-2">
              <div>
                <label className="p-2 h6">Ending Date</label>
              </div>
              <div>
                {' '}
                <input type="date" className="rounded fw-bold" />
              </div>
            </Col>
            <Col md={4} sm={12} className="text-center p-2 align-center">
              <div>
                <label className="p-2 h6">Value</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Search Value"
                  className="rounded fw-medium text-black"
                />
              </div>
            </Col>
          </Row>
          <Row>
          <Col md={4} sm={12} className="text-center p-2 align-center">
              <div> <label className="p-2 h6">Service</label></div>
             <div><select className="rounded fw-medium h-30 p-1 border-2">
                <option disabled>Select Service</option>
                <option>Recharge</option>
                <option>Bill Pay</option>
                <option>Dmt</option>
                <option>Aeps</option>
                <option>Utipancard</option>
              </select></div>
              
            </Col>
          </Row>
        </Container>
      </div>
      <Row>
        <Col>
          <div className="shadow p-3 mb-5 bg-white rounded">
            <div className="fw-bold text-light bg-black p-2 rounded d-flex flex-row justify-content-between ">
              <h5 className="align-center">Complaints</h5>
            </div>
            <Table responsive>
              <thead>
                <tr>
                  <th>User Details</th>
                  <th>Transaction Details</th>
                  <th>Subject</th>
                  <th>Query Details</th>
                  <th>Solution Details</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </Table>
            <div className="p-2">
              <span>Showing of 0 to 0 of entires</span>
            </div>
          </div>
        </Col>
        </Row>
    </div>
  )
}

export default ResolvedTicket
