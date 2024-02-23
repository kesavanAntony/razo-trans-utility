import { Row, Col, Table } from 'react-bootstrap'
import CIcon from '@coreui/icons-react'
import Form from 'react-bootstrap/Form'
import { Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import React,{useState} from 'react'
import { cilPlus} from '@coreui/icons'
import Modal from 'react-bootstrap/Modal';
import { CForm, CFormInput } from '@coreui/react'

const CashfreePG2= () => {
  const [lgShow, setLgShow] = useState(false)
  const [validated, setValidated] = useState(false)
  
  const handleSubmit = (event) =>{

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  return (
    <div>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='fw-bold h3'>Cashfree PG Request</Navbar.Brand>
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
              <div> <label className="p-2 h6">Status</label></div>
             <div><select className="rounded fw-medium h-30 p-1 border-2">
                <option defaultChecked>Select Fund Status</option>
                <option>Success</option>
                <option>Failed</option>
                <option>Pending</option>
                <option>Apporoved</option>
                <option>Rejected</option>
              </select></div>
              
            </Col>
          </Row>
        </Container>
      </div>
      <Row>
        <Col>
          <div className="shadow p-3 mb-5 bg-white rounded">
            <div className="fw-bold text-light bg-black p-2 rounded d-flex flex-row justify-content-between ">
              <h5 className="align-center">Cashfree PG Request</h5>
              <button className="btn btn-light fw-medium rounded"  onClick={() => setLgShow(true)}><CIcon icon={cilPlus} className='me-2'/>NEW REQUEST</button>
              <button className="btn btn-light fw-medium rounded" onClick={() => setLgShow(true)}><CIcon icon={cilPlus} className='me-2'/>Generate Payment Link</button>
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
        <CForm noValidate validated={validated}
           onSubmit={handleSubmit}>
        <Modal.Body>
          <Row>
          <Col md={4} sm={12}>
            
            <div className="p-2">
            <label className="h6 w-100">Mobile</label>
            <div>
            <CFormInput
                type="text"
                placeholder="Enter Mobile"
                className="rounded fw-medium text-black w-100" required
              />  
              </div>
            </div>
            <div className="p-2">
               <label className="h6 w-100">Remark</label>
            <div>
              <CFormInput
                type="text"
                placeholder="Enter Remark"
                className="rounded fw-medium text-black" required
              />
            </div>
            </div>
          </Col>
          <Col md={4} sm={12}>
            <div className="p-2">
               <label className="h6 w-100">Amount</label>
            <div>
              <CFormInput
                type="text"
                placeholder="Enter Amount"
                className="rounded fw-medium text-black" required
              />
            </div>
            </div>
           
          </Col>
          <Col md={4} sm={12}>
          <div className="p-2">
               <label className="h6 w-100">Email</label>
            <div>
              <CFormInput
                type="text"
                placeholder="Enter Email"
                className="rounded fw-medium text-black" required
              />
            </div>
            </div>
          
          </Col>
          </Row>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={() => setLgShow(false)}>Cancel</Button>
          <Button variant="primary" type='submit'>Submit</Button>
        </Modal.Footer>
        </CForm>
      </Modal>
        {/* modal */}
    </div>
  )
}

export default CashfreePG2
