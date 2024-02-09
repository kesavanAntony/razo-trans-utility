import { Row, Col, Table } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import CIcon from '@coreui/icons-react'
import Form from 'react-bootstrap/Form'
import { Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import { cilPlus } from '@coreui/icons'

const LoadWallet = () => {
  const [lgShow, setLgShow] = useState(false)

  return (
    <div className="">
      <Navbar expand="lg" className="bg-body-tertiary">
      
          <Navbar.Brand href="#home" className="fw-bold h3">
            Wallet Load Request
          </Navbar.Brand>
       
      </Navbar>

      <Navbar expand="lg" className="bg-dark">
        <Container fluid>
          <Navbar.Brand href="#" className="text-light">
            Search
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="bg-light" />
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
            <Col md={3} sm={12} className="text-center p-2">
              <div>
                {' '}
                <label className="p-2 h6">Starting Date</label>
              </div>

              <div>
                <input type="date" className="rounded fw-bold" />
              </div>
            </Col>
            <Col md={3} sm={12} className="text-center p-2">
              <div>
                <label className="p-2 h6">Ending Date</label>
              </div>
              <div>
                {' '}
                <input type="date" className="rounded fw-bold" />
              </div>
            </Col>
            <Col md={3} sm={12} className="text-center p-2 align-center">
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
            <Col md={3} sm={12} className="text-center p-2 align-center">
              <div>
                {' '}
                <label className="p-2 h6">Status</label>
              </div>
              <div>
                <select className="rounded fw-medium h-30 p-1 border-2">
                  <option disabled>Select Fund Status</option>
                  <option>Success</option>
                  <option>Failed</option>
                  <option>Pending</option>
                  <option>Apporoved</option>
                  <option>Rejected</option>
                </select>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Row>
        <Col md={4} sm={12} className="">
          <Table className="border-none p-5 shadow p-3 bg-white">
            <tbody>
              <tr>
                <td>VANILLA BUSINESS SOLUTION</td>
                <td>508734863</td>
              </tr>
              <tr>
                <td>IFSC:96823142</td>
                <td>BRANCH:Neyveli</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <Button className="w-100" onClick={() => setLgShow(true)}>
                    Click here to make Request
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col md={4} sm={12} className="">
          <Table className="border-none shadow p-3 bg-white">
            <tbody>
              <tr>
                <td>VANILLA BUSINESS SOLUTION</td>
                <td>508734863</td>
              </tr>
              <tr>
                <td>IFSC:96823142</td>
                <td>BRANCH:Neyveli</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <Button className="w-100" onClick={() => setLgShow(true)}>Click here to make Request</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col md={4} sm={12} className="">
          <Table className="border-none shadow p-3 bg-white">
            <tbody>
              <tr>
                <td>VANILLA BUSINESS SOLUTION</td>
                <td>508734863</td>
              </tr>
              <tr>
                <td>IFSC:96823142</td>
                <td>BRANCH:Neyveli</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <Button className="w-100" onClick={() => setLgShow(true)}>Click here to make Request</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      {/* modal */}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton className='bg-secondary text-light'>
          <Modal.Title id="example-modal-sizes-title-lg" >Wallet Fund Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
          <Col md={4} sm={12}>
            <div className="p-2">
              <label className="h6 w-100">Deposit Bank</label>
              <div>
                <select className="rounded fw-medium w-100 border-2">
                  <option defaultChecked>Select Bank</option>
                  <option>Yes Bank</option>
                  <option>ICICI Bank</option>
                  <option>SBI Bank</option>
                </select>
              </div>
            </div>
            <div className="p-2">
              <label className=" w-100 h6">Ending Date</label>
              <div>
                <input type="date" className="rounded fw-medium w-100" />
              </div>
            </div>
            <div className="p-2">
            <label className="h6 w-100">Remark</label>
            <div>
            <input
                type="text"
                placeholder="Enter Remark"
                className="rounded fw-medium text-black w-100"
              />  
              </div>
            </div>
          </Col>
          <Col md={4} sm={12}>
            <div className="p-2">
               <label className="h6 w-100">Amount</label>
            <div>
              <input
                type="text"
                placeholder="Enter Amount"
                className="rounded fw-medium text-black"
              />
            </div>
            </div>
           
            <div className="p-2">
              <label className="h6 w-100">Ref No.</label>
              <div>
              <input
                type="text"
                placeholder="Enter Reference Number"
                className="rounded fw-medium text-black"
              />  
              </div>
              
            </div>
          </Col>
          <Col md={4} sm={12}>
          <div className="p-2">
              <label className="h6 w-100">Payment Mode</label>
              <div>
                <select className="rounded fw-medium w-100 border-2">
                  <option defaultChecked>Select Payment</option>
                  <option>Net Banking</option>
                  <option>NEFT</option>
                  <option>Cash</option>
                  <option>IMPS</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="p-2">
            <label className="h6 w-100">Pay Slip (Optional)</label>
            <div className="p-2">
              <input type='file' className='rounded'/>
            </div>
            </div>
          </Col>
          </Row>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
      {/* modal */}
      <Row>
        <Col>
          <div className="shadow p-3 mb-5 bg-white rounded">
            <div className="fw-bold text-light bg-black p-2 rounded d-flex flex-row justify-content-between ">
              <h5 className="align-center">Wallet Load Request</h5>
              <button className="btn btn-light fw-medium rounded" onClick={() => setLgShow(true)}>
                <CIcon icon={cilPlus} className="me-2" />
                NEW REQUEST
              </button>
            </div>
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Deposit Bank Details</th>
                  <th>Refrence Details</th>
                  <th>Amount</th>
                  <th>Remark</th>
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

export default LoadWallet
