import CIcon from '@coreui/icons-react'
import React from 'react'
import { Col, Row,Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { NavLink } from 'react-router-dom'
import { cilCursor } from '@coreui/icons'
import Table from 'react-bootstrap/Table'
import { CButton } from '@coreui/react'
const Mobile = () => {
  return (
    <div>
      <Row className="m-2">
        <Col md={4} sm={12} className="">
          <div className="shadow p-3 mb-5 bg-white rounded">
            <div className="fw-bold text-light bg-black p-2  rounded-2">
              <h5>Mobile Recharge</h5>
            </div>
            <Form className="m-4 border-bottom">
              <div className="mb-3">
                <Form.Label className='fw-medium'>Circle</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Select Circle</option>
                  <option>Assam</option>
                  <option>Bihar</option>
                  <option>Chandigarh</option>
                  <option>Gujarat</option>
                  <option>Haryana</option>
                  <option>Himachal Pradesh</option>
                  <option>Jammu Kashmir</option>
                  <option>Karnataka</option>
                  <option>Kerala</option>
                  <option>Goa</option>
                  <option>Maharashtra</option>
                  <option>Madhya Predesh</option>
                  <option>Chhattisgarh</option>
                  <option>Manipur</option>
                  <option>Meghalaya</option>
                  <option>Orissa</option>
                  <option>Punjab</option>
                  <option>Rajasthan</option>
                  <option defaultChecked>Tamilnadu</option>
                  <option>UP East</option>
                  <option>UP West</option>
                  <option>West Pengal</option>
                </Form.Select>
              </div>
              <div className="mb-3">
                <Form.Label className='fw-medium'>Mobile Operator</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Select Operator</option>
                  <option value="1">VODAFONE</option>
                  <option value="2">BSNL SPECIAL</option>
                  <option value="3">TATADOCOMO</option>
                  <option value="3">TATADOCOMO SPECIAL</option>
                  <option value="3">JIORECH</option>
                  <option value="3">IDEA</option>
                  <option value="3">AIRTEL</option>
                </Form.Select>
              </div>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className='fw-medium'>Mobile Number</Form.Label>
                <Form.Control type="text" placeholder="Enter mobile number" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label className='fw-medium'>Recharge Amount</Form.Label>
                <Form.Control type="text" placeholder="Enter mobile amount" />
                <CButton color="info" className="p" size=''>
                  PLAN
                </CButton>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label className='fw-medium'>T-Pin</Form.Label>
                <Form.Control type="text" placeholder="Enter transaction pin" />
                <div className="text-end m-0">
                  <NavLink className="text-decoration-none">Generate Or Forgot Pin ??</NavLink>
                </div>
              </Form.Group>
            </Form>
            <div className="text-center">
              <Button className="text-italic">
                {' '}
                <CIcon icon={cilCursor} className="me-2" />
                Pay Now
              </Button>
            </div>
          </div>
        </Col>
        <Col md={8} sm={12}>
          <div className="shadow p-3 mb-5 bg-white rounded">
            <div className="fw-bold text-light bg-black p-2 rounded">
              <h5>Recent Mobile Recharge</h5>
            </div>
            <Table responsive>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Recharge Details</th>
                  <th>Amount/ Commission</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
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

export default Mobile
