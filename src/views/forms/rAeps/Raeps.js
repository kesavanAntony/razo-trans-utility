import { cilReload, cilSend } from '@coreui/icons'
import { Row, Col } from 'react-bootstrap'
import CIcon from '@coreui/icons-react'
import Form from 'react-bootstrap/Form'
import { Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'

import Table from 'react-bootstrap/Table'

import React from 'react'

const Rapes = () => {
  return (
    <div className="">
   <Navbar expand="lg" className="bg-secondary">
      <Container fluid>
        <Navbar.Brand href="#" className='text-light'>Search</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
           
          <Form className="d-flex m-1">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 p-2"
              aria-label="Search"
            />
            <Button className="btn btn-danger">Refresh</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <div className="shadow p-3 mb-5 bg-white rounded">
        <Container>
          <Row>
            <Col md={4} sm={12} className="text-center p-2">
              <label className="p-1">Starting Date</label>
              <input type="date" className="rounded fw-bold" />
            </Col>
            <Col md={4} sm={12} className="text-center p-2">
              <label className="p-1">Ending Date</label>
              <input type="date" className="rounded fw-bold" />
            </Col>
            <Col md={4} sm={12} className="text-center p-2 align-center">
              <label className="p-1">Value</label>
              <input
                type="text"
                placeholder="Search Value"
                className="rounded fw-medium text-black"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="w-75">
        <Table>
          <Row>
            {' '}
            <div className="">
              <h4 className="bg-dark text-light col-md-12 rounded">Aeps Service Registration</h4>
            </div>
          </Row>

          <Row className="shadow p-3 mb-5 bg-white rounded">
            <div className="col-md-6 col-sm-12">
              <div>
                <Form>
                  <Form.Group className="mb-3 fw-bold" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="name" />
                  </Form.Group>
                </Form>
              </div>
              <div>
                {' '}
                <Form>
                  <Form.Group className="mb-3 fw-bold" controlId="formBasicEmail">
                    <Form.Label>Shopname</Form.Label>
                    <Form.Control type="text" placeholder="shop name" />
                  </Form.Group>
                </Form>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div>
                {' '}
                <Form>
                  <Form.Group className="mb-3 fw-bold" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="email address" />
                  </Form.Group>
                </Form>
              </div>
              <div>
                <Form>
                  <Form.Group className="mb-3 fw-bold" controlId="formBasicEmail">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="text" placeholder="mobile number" />
                  </Form.Group>
                </Form>
              </div>
            </div>
            <div className="text-center">
              <Button className='primary border-3'>
                <CIcon icon={cilSend} className="me-2" />
                Submit
              </Button>
            </div>
          </Row>
        </Table>
      </Container>
    </div>
  )
}

export default Rapes
