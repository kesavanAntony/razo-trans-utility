import React from 'react'
import { Col, Row, } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

import Table from 'react-bootstrap/Table'

const Pancard = () => {
  return (
    <div>
      <Row className="m-2">
        <Col md={4} sm={12} className="">
          <div className="shadow p-3 mb-5 bg-white rounded">
            <div className="fw-bold text-light bg-black p-2  d-flex flex-row justify-content-between align-item-center">
              <h5>Uti Pancard</h5>
              <button className="btn btn-primary rounded btn-sm">LOGIN UTI PORTAL</button>
            </div>
            <Form className=" border-bottom">
              <Table responsive className="border">
                <thead>
                  <tr>
                    <th>1 Token</th>
                    <th>1 PAN Application</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Username</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Password</td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
              <div className="m-2">
                <Form.Group className="mb-3 fw-bold" controlId="formGroupEmail">
                  <Form.Label>No Of Token</Form.Label>
                  <Form.Control type="text" placeholder="Enter No of Token" className="fw-medium" />
                </Form.Group>
                <Form.Group className="mb-3 fw-bold" controlId="formGroupEmail">
                  <Form.Label>Total Price in Rs</Form.Label>
                  <Form.Control type="text" placeholder="" className="fw-medium" />
                </Form.Group>
                <Form.Group className="mb-3 fw-bold" controlId="formGroupEmail">
                  <Form.Label>Vie Id</Form.Label>
                  <Form.Control type="text" placeholder="" className="fw-medium" />
                </Form.Group>
              </div>
            </Form>
          </div>
        </Col>
        <Col md={8} sm={12}>
          <div className="shadow p-3 mb-5 bg-white rounded">
            <div className="fw-bold text-light bg-black p-2 rounded d-flex flex-row justify-content-between ">
              <h5 className="align-center">Recent Uti Pancard Token</h5>
              <button className="btn btn-primary rounded btn-sm">REQUEST FOR VIE-ID</button>
            </div>
            <Table responsive>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>User Details</th>
                  <th>Transaction Details</th>
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
     
      <div className="d-flex flex-row justify-content-between">
        <div className="text-secondary col-md-8 col-sm-12">
          <h4>Important T&Cs:</h4>
          <ul>
            <li>The fee for processing PAN application is ₹107 inclusive of GST.</li>
            <li>PAN card application can be processed using eKYC or physical documents.</li>
          </ul>
        </div>
        <div className='col-md-8 col-sm-12'>
          <p className='text-secondary'>Powered By</p>
          <img src={require ("../pancard/uti.png")}/>
        </div>
      </div>
    </div>
  )
}

export default Pancard
