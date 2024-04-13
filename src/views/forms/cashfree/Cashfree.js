import { cilZoom } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import React,{useState} from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import { CFormFeedback } from '@coreui/react'
const Cashfree = () => {
  
  const [value,setValue]=useState({
    mobileNumber:""
  })
  const onHandle = (e) =>{
setValue({...value,[e.target.name]:e.target.value})
  }
  const [error,setError] =useState({})
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    const validateErrors ={}
    if (!value.mobileNumber.trim()) {
     validateErrors.mobileNumber = 'mobile number is required'
   } 
   else if (value.mobileNumber.length < 10) {
     validateErrors.mobileNumber = 'mobile number must be above 10'
   }
   setError(validateErrors)
   
   if(Object.keys(validateErrors).length === 0){
       console.log(value)
   }
 }
  return (
    <div>
      <Row className="m-2">
        <Col md={4} sm={12} className="">
          <div className="shadow p-3 mb-5 bg-white rounded">
           <div className="fw-bold text-light bg-dark p-2  rounded-2">
              <h5>Cashfree Payout</h5>
            </div>
            <Form className="m-4 "
           onSubmit={handleSubmit}>
              <Form.Group className="mb-3 fw-medium" controlId="formGroupEmail">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="number" placeholder="Enter mobile number" className='fw-medium' name="mobileNumber" onChange={onHandle}/>
                <CFormFeedback  className='text-danger fs-6'>{error.mobileNumber}</CFormFeedback>
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

export default Cashfree
