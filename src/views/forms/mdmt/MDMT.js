import { cilZoom } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
const MDMT = () => {
  return (
    <div>
      <Row className="m-2">
        <Col md={4} sm={12} className="">
          <div className="shadow p-3 mb-5 bg-white rounded">
            <div className="fw-bold text-light bg-black p-2  rounded-2">
              <h5> Money Transfer</h5>
            </div>
            <Form className="m-4 ">
              <Form.Group className="mb-3 fw-medium" controlId="formGroupEmail">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="text" placeholder="Enter mobile number" className='fw-medium'/>
              </Form.Group>
            </Form>
            <div className="text-center">
              <Button className="text-italic">
                {' '}
                <CIcon icon={cilZoom} className="me-2" />
                SEARCH
              </Button>
            </div>
          </div>
        </Col>
        <Col md={8} sm={12}>
          <div className="shadow p-3 mb-5 bg-white rounded">
            <div className="fw-bold text-light bg-black p-2 rounded">
              <h5>Beneficiary List</h5>
            </div>
            <Table responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Account Details</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
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

export default MDMT
