import CIcon from '@coreui/icons-react'
import React,{useState,useEffect} from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { NavLink } from 'react-router-dom'
import { cilCursor } from '@coreui/icons'
import Table from 'react-bootstrap/Table'
import { CButton, CFormFeedback } from '@coreui/react'
import axios from 'axios'

const Dth = () => {

  const [validated, setValidated] = useState(false)

  const [list,updateList] = useState([])
  const [value,setValue]=useState({
    circle:"",
    dthNumber:"",
    dthAmount:"",
    tpin:"",
  })
  
  useEffect(()=>{
    axios.get('http://localhost:4000/list/dth/recharge')
    .then((res)=>{
    const result = res.data;
    updateList(result)
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
    axios.post('http://localhost:4000/dth/recharge',value)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))  
  }

  return (
    <div>
      <Row className="m-2">
      <Col md={4} sm={12} className="">
          <div className="shadow p-3 mb-5 bg-white rounded">
            <div className="fw-bold text-light bg-black p-2  rounded-2">
              <h5>Dth Recharge</h5>
            </div>
            <Form className="m-4 border-bottom" noValidate validated={validated}
           onSubmit={handleSubmit}>
    
              <div className="mb-3">
                <Form.Label className='fw-medium'>Mobile Operator</Form.Label>
                <Form.Select aria-label="Default select example" name='operator' required id="validationCustom02" onChange={onHandle}>
                  <option className='text-secondary'>Select Operator</option>
                  <option >Tata Sky</option>
                  <option >Dish Tv</option>
                  <option >Videocon D2H</option>
                  <option >Sun Direct Tv (with Validation)</option>
                  <option >Airtel DTH</option>
                </Form.Select>
                <CFormFeedback invalid>Please provide a valid Operator</CFormFeedback>
              </div>
              <Form.Group className="mb-3">
                <Form.Label className='fw-medium'>Dth Number</Form.Label>
                <Form.Control type="number" placeholder="Enter dth number"  name='dthNumber' required onChange={onHandle}/>
                <CFormFeedback invalid>Please Enter your Mobile Number</CFormFeedback>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label className='fw-medium'>Recharge Amount</Form.Label>
                <Form.Control type="number" placeholder="Enter dth amount" name='dthAmount' required onChange={onHandle}/>
                <CFormFeedback invalid>Please Enter your Amount</CFormFeedback>
                <CButton color="info" className="p" >
                  PLAN
                </CButton>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className='fw-medium'>T-Pin</Form.Label>
                <Form.Control type="text" placeholder="Enter transaction pin" name='tpin' required onChange={onHandle}/>
                <CFormFeedback invalid>Please Enter your pin</CFormFeedback>
                <div className="text-end m-0">
                  <NavLink className="text-decoration-none">Generate Or Forgot Pin ??</NavLink>
                </div>
              </Form.Group>
            
            <div className="text-center">
              <Button className="text-italic" type="submit">
                {' '}
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
              <h5>Recent Dth Recharge</h5>
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
                  <tr key={index} className='align-middle'>
                  <td >{item.transactionId}
                  <p>{item.rechargeTime}</p></td>
                  <td><h6>Number - {item.dthNumber}</h6>
                  <h6>Operator - {item.operator}</h6></td>
                  <td><h6>Amount-{item.dthAmount}</h6></td>
                  <td><button className='bg-success text-light rounded'>Success</button></td>
                </tr>
                      )
                  })
                }
              
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

export default Dth
