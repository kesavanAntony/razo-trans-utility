import { cilZoom } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import React,{useState} from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import { CFormFeedback } from '@coreui/react'
const Easebuzz = () => {
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
      <Row className="m-2">
        <Col md={4} sm={12} className="">
          <div className="shadow p-3 mb-5 bg-white rounded">
           <div className="fw-bold text-light bg-dark p-2  rounded-2">
              <h5> Easebuzz Payout</h5>
            </div>
            <Form className="m-4 " noValidate validated={validated}
           onSubmit={handleSubmit}>
              <Form.Group className="mb-3 fw-medium" controlId="formGroupEmail">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="number" placeholder="Enter mobile number" className='fw-medium ' required/>
                <CFormFeedback invalid>Please Enter Mobile Number</CFormFeedback>
              </Form.Group>
           
            <div className="text-center">
              <Button className="text-italic" type='submit'>
                {' '}
                <CIcon icon={cilZoom} className="me-2" />
                SEARCH
              </Button>
            </div> 
            </Form>
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

export default Easebuzz
