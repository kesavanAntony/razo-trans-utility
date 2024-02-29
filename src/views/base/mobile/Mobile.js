import CIcon from '@coreui/icons-react'
import React, { useEffect } from 'react'
import { Col, Row,Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { NavLink } from 'react-router-dom'
import { cilCursor } from '@coreui/icons'
import Table from 'react-bootstrap/Table'
import { CFormFeedback } from '@coreui/react'
import { useState } from 'react'
import axios from 'axios'


const Mobile = () => {

  const [validated, setValidated] = useState(false)
  const [list,updateList] = useState([])
  const [value,setValue]=useState({
    circle:"",
    operator:"",
    mobileNumber:"",
    rechargeAmount:"",
    tpin:""
  })

  useEffect(()=>{
  axios.get('https://backend-razo-2.onrender.com/list/mobile/recharge')
  .then((res)=>{
  const result = res.data;
  updateList(result)
  console.log(result)
  })
  .catch((error)=>{
    console.log(error)
  })
  },[])

  const onHandle = (e) =>{
   setValue({...value,[e.target.name]:e.target.value})
  }
  const handleSubmit = (event) =>{

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
   
      setValidated(true)
      axios.post('https://backend-razo-2.onrender.com/mobile/recharge',value)
      .then(res => {
        console.log(res.data)
        alert("mobile recharged successfully")
      })
       .catch(err => console.log(err))  
    }

  return (
    <div>
      <Row className="m-2">
        <Col md={4} sm={12} className="">
          <div className="shadow p-3 mb-5 bg-white rounded">
            <div className="fw-bold text-light bg-black p-2  rounded-2">
              <h5>Mobile Recharge</h5>
            </div>
            <Form className="m-4 border-bottom" noValidate validated={validated}
            onSubmit={handleSubmit}>
              <div className="mb-3">
                <Form.Label className='fw-medium'>Circle</Form.Label>
                <Form.Select aria-label="Default select example"  name='circle' required id="validationCustom01" onChange={onHandle}>
                  <option className='text-secondary'>Select Circle</option>
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
                  <option>Tamilnadu</option>
                  <option>UP East</option>
                  <option>UP West</option>
                  <option>West Pengal</option>
                </Form.Select>
                <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
              </div>
              <div className="mb-3">
                <Form.Label className='fw-medium'>Mobile Operator</Form.Label>
                <Form.Select aria-label="Default select example" name='operator' required id="validationCustom02" onChange={onHandle}>
                  <option className='text-secondary'>Select Operator</option>
                  <option >VODAFONE</option>
                  <option >BSNL SPECIAL</option>
                  <option >TATADOCOMO</option>
                  <option >TATADOCOMO SPECIAL</option>
                  <option >JIORECH</option>
                  <option >IDEA</option>
                  <option >AIRTEL</option>
                </Form.Select>
                <CFormFeedback invalid>Please provide a valid Operator</CFormFeedback>
              </div>
              <Form.Group className="mb-3">
                <Form.Label className='fw-medium'>Mobile Number</Form.Label>
                <Form.Control type="number" placeholder="Enter mobile number"  name='mobileNumber'required onChange={onHandle}/>
                <CFormFeedback invalid>Please Enter your Mobile Number</CFormFeedback>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label className='fw-medium'>Recharge Amount</Form.Label>
                <Form.Control type="number" placeholder="Enter mobile amount" name='rechargeAmount' required onChange={onHandle}/>
                <CFormFeedback invalid>Please Enter your Amount</CFormFeedback>
                
                <div className='mt-1'>
               <button className='text-light rounded bg-info border-0'>Plan</button>
                  </div>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className='fw-medium'>T-Pin</Form.Label>
                <Form.Control type="text" placeholder="Enter transaction pin" name='tpin' required onChange={onHandle}/>
                <CFormFeedback invalid>Please Enter your pin</CFormFeedback>
                <div className="text-end m-0">
                  <NavLink className="text-decoration-none">Generate Or Forgot Pin ??</NavLink>
                </div>
              </Form.Group>
            
            <div className="text-center p-2">

              <Button className="text-italic" type="submit">
                <CIcon icon={cilCursor} className="me-2" />
                Pay Now
              </Button>
           
            </div>
            </Form>
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
                {
                  list.map((item,index)=>{
                    return(
                  <tr key={index}>
                  <td className='align-middle'>{item.transactionId}
                  <p>{item.rechargeTime}</p></td>
                  <td className='align-middle'><h6>Number - {item.mobileNumber}</h6>
                  <h6>Operator - {item.operator}</h6></td>
                  <td className='align-middle'><h6>Amount-{item.rechargeAmount}</h6></td>
                  <td className='align-middle'><button className='bg-success text-light rounded'>Success</button></td>
                </tr>
                    )
                  })
                }
              
              </tbody>
            </Table>
            <div className="p-2">
              <span>Showing of 1 to 1 of entires</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Mobile
