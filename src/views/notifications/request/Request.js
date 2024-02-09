import { Row, Col, Table } from 'react-bootstrap'
import { cilPlus } from '@coreui/icons'
import Form from 'react-bootstrap/Form'
import { Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import React,{useState} from 'react'
import CIcon from '@coreui/icons-react'
import Modal from 'react-bootstrap/Modal'
import { NavLink } from 'react-router-dom'


const Request = () => {
  const [lgShow, setLgShow] = useState(false)
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold h3">
            Aeps Fund Request
          </Navbar.Brand>
        </Container>
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
              <Button className="fw-medium mx-2" color="success">
                Export
              </Button>
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
        <Col>
          <div className="shadow p-3 mb-5 bg-white rounded">
            <div className="fw-bold text-light bg-black p-2 rounded d-flex flex-row justify-content-between ">
              <h5 className="align-center">Aeps Fund Request</h5>
              <button className="btn btn-light fw-medium rounded" onClick={() => setLgShow(true)}>
                <CIcon icon={cilPlus} className="me-2" />
                NEW REQUEST
              </button>
            </div>
            <Table responsive>
              <thead>
                <tr>
                  <th>Order Id</th>
                  <th>Date & Time</th>
                  <th>User Details</th>
                  <th>Refrence Details</th>
                  <th>Amount</th>
                  <th>Remark</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
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
      {/* modal */}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton className="bg-secondary text-light">
          <Modal.Title id="example-modal-sizes-title-lg">Wallet Fund Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
          <Table className='border p-2'>
      <thead>
        <tr>
          <th>Settlement Type</th>
          <th colSpan={3}>Settlement Charge</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>NEFT</td>
          <td>IMPS 100 To 25000</td>
          <td>IMPS 25001 To 2Lac</td>
        </tr>
        <tr>
          <td>24/7</td>
          <td>0 /- Rs	</td>
          <td>5 /- Rs</td>
          <td>10 /- Rs</td>
        </tr>
      </tbody>
    </Table >
          </Row>
          <Row>
            <Col md={4} sm={12}>
              <div className="p-2">
                <label className="h6 w-100">Account Number</label>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Value"
                    className="rounded fw-medium text-black w-100"
                  />
                </div>
              </div>
              <div className="p-2">
                <label className="h6 w-100">IFSC Code</label>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Value"
                    className="rounded fw-medium text-black w-100"
                  />
                </div>
              </div>
              <div className="p-2">
                <label className="h6 w-100">Bank Name</label>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Value"
                    className="rounded fw-medium text-black w-100"
                  />
                </div>
              </div>
            </Col>
            <Col md={4} sm={12}>
              <div className="p-2">
                {' '}
                <label className="w-100 h6">Wallet Type</label>
                <div>
                  <select className="rounded fw-medium border-2 w-100">
                    <option defaultChecked>Select Wallet</option>
                    <option>Move to Wallet</option>
                    <option>Move to Bank</option>
                  </select>
                </div>
              </div>
              <div className="p-2">
                {' '}
                <label className="w-100 h6">Transfer Mode</label>
                <div>
                  <select className="rounded fw-medium border-2 w-100">
                    <option defaultChecked>Select Mode</option>
                    <option>IMPS</option>
                    <option>NEFT</option>
                  </select>
                </div>
              </div>
            </Col>
            <Col md={4} sm={12}>
              <div className="p-2">
                <label className="h6 w-100">Amount</label>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Value"
                    className="rounded fw-medium text-black w-100"
                  />
                </div>
              </div>
              <div className="p-2">
                <label className="h6 w-100">T-pin</label>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Transaction Pin"
                    className="rounded fw-medium text-black w-100"
                  />
                  <div>
                    {' '}
                    <NavLink className="text-decoration-none">Generate Or Forgot Pin??</NavLink>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <p className="text-danger my-2">
              Note - If you want to change bank details, please send mail with account details to
              update your bank details.
            </p>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
      {/* modal */}
    </div>
  )
}

export default Request
