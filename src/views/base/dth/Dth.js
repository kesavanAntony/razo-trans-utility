import CIcon from '@coreui/icons-react'
import React,{useState,useEffect} from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { NavLink } from 'react-router-dom'
import { cilCursor } from '@coreui/icons'
import Table from 'react-bootstrap/Table'
import {  CFormFeedback } from '@coreui/react'
import axios from 'axios';
import Randomstring from 'randomstring'

const Dth = () => {

  const [list,updateList] = useState([])
  const [formError, updateFormError] = useState({})

  const randomString = Randomstring.generate({
    length:8,
    charset:'alphabetic'
  });
  

  const [value,setValue]=useState({
    operator:"",
    dthNumber:"",
    amount:"",
    tpin:"",
    mobileNumber:"",
    currency: 'INR',
    receiptID: randomString,
  })
  useEffect(()=>{
   dthListLoad()
    },[])

    const dthListLoad = () =>{
      axios.get('https://backend-razo.vercel.app/list/dth/recharge')
      .then((res)=>{
      const result = res.data;
      updateList(result)
      })
      .catch((error)=>{
        console.log(error)
      })
    }

    const onHandle = (e) =>{
      setValue({...value,[e.target.name]:e.target.value})
     }


    const handleSubmit = (e) => {
      e.preventDefault()
           const validateErrors={} ;
          if (!value.operator.trim()) {
            validateErrors.operator = 'select your operator'
          }
          if (!value.dthNumber.trim()) {
            validateErrors.dthNumber = 'dth number is required'
          }
      
          if (!value.amount.trim()) {
            validateErrors.amount = 'amount is required'
          } 
          else if (value.amount < 100) {
            validateErrors.amount = 'amount must be above 10'
          }
          if (!value.tpin.trim()) {
            validateErrors.tpin = 'tpin is required'
          } else if (value.tpin < 4) {
            validateErrors.tpin = 'enter 4 digit number'
          }
          updateFormError(validateErrors)
  
      
  
      if (Object.keys(validateErrors).length === 0 ) {
  
        axios
          .post('https://backend-razo.vercel.app/order', value)
          .then((res) => {
            const result = res.data
            console.log(result)
            console.log(result.amount)
  
            var options = {
              key: 'rzp_live_KxLmp2zN6kUt9n', // Enter the Key ID generated from the Dashboard
              amount: result.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
              currency: result.currency,
              name: 'Razo Trans Utility', //your business name
              description: 'Test Transaction',
              image:"https://app.gemoo.com/share/image-annotation/627135246211112960?codeId=vJ32leWg3Jjao&origin=imageurlgenerator",
              order_id: result.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
              handler: async function (response) {
                const body = {
                  ...response,
                }
                const validateRes = await fetch('https://backend-razo.vercel.app/order/validate', {
                  method: 'POST',
                  body: JSON.stringify(body),
                  headers: {
                    'Content-Type': 'application/json',
                  },
                })
                const jsonRes = await validateRes.json()
                console.log(jsonRes)
                if(jsonRes.msg === "success"){
               
                 axios.post("https://backend-razo.vercel.app/dth/recharge",value)
                 .then((response)=>{
                 const result = response.data;
                 if(result.message === "success"){
                  alert("successflly recharged");
                  navigate("/base/dth")
                  dthListLoad
                 }
                 })
                 .catch((error)=>{
                  console.log(error)
                 })
               }
              //  if(jsonRes.msg === "success"){
              //   axios.post("https://backend-razo.vercel.app/mobile/recharge/payment",jsonRes)
              //   .then((response)=>{
              //   const result = response.data;
              //   if(result.message === "success"){
              //    alert("payement successs");
              //    listMobileRecharge();
              //   }
              //   })
              //   .catch((error)=>{
              //    console.log(error)
              //   })
              // }
              },
              prefill: {
                //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                name: 'razo', //your customer's name
                email: 'xyz@example.com',
                contact: '044-45270126', //Provide the customer's phone number for better conversion rates
              },
              notes: {
                address: 'Razorpay Corporate Office',
              },
              theme: {
                color: '#3399cc',
              },
            }
  
            var rzp1 = new window.Razorpay(options)
            rzp1.on('payment.failed', function (response) {
                alert("payment Failed")
                navigate("/base/mobile")
              // alert(response.error.code)
              // alert(response.error.description)
              // alert(response.error.source)
              // alert(response.error.step)
              // alert(response.error.reason)
              // alert(response.error.metadata.order_id)
              // alert(response.error.metadata.payment_id)
            })
            rzp1.open()
            e.preventDefault()
          })
          .catch((err) => console.log(err))
      }
    }


  const generateLink = () =>{
   
    const validateErrors={} ;
    if (!value.operator.trim()) {
      validateErrors.operator = 'select your operator'
    }
    if (!value.dthNumber.trim()) {
      validateErrors.dthNumber = 'dth number is required'
    }

    if (!value.amount.trim()) {
      validateErrors.amount = 'amount is required'
    } 
    else if (value.amount < 100) {
      validateErrors.amount = 'amount must be above 10'
    }
    if (!value.tpin.trim()) {
      validateErrors.tpin = 'tpin is required'
    } else if (value.tpin < 4) {
      validateErrors.tpin = 'enter 4 digit number'
    }
    updateFormError(validateErrors)

  
  
  
  if (Object.keys(validateErrors).length === 0 ) {
  
  
    axios
    .post('https://backend-razo.vercel.app/payment/link', value)
    .then((res) => {
      const result = res.data
      window.alert("payment link sent...")
      console.log(result)
    })
    .catch((err)=>{
      alert("something went to wrong")
  console.log(err)
    })
   
    }
  }

  return (
    <div>
      <Row className="m-2">
      <Col md={4} sm={12} className="">
          <div className="shadow p-3 mb-5 bg-white rounded">
           <div className="fw-bold text-light bg-black p-2  rounded-2">
              <h5>Dth Recharge</h5>
            </div>
            <Form className="m-4 border-bottom" 
           onSubmit={handleSubmit}>
    
              <div className="mb-3">
                <Form.Label className='fw-medium'>Dth Operator</Form.Label>
                <Form.Select aria-label="Default select example" name='operator'  onChange={onHandle} value={value.operator}>
                  <option className='text-secondary'>Select Operator</option>
                  <option >Tata Sky</option>
                  <option >Dish Tv</option>
                  <option >Videocon D2H</option>
                  <option >Sun Direct Tv (with Validation)</option>
                  <option >Airtel DTH</option>
                </Form.Select>
                <CFormFeedback className="text-danger fw-medium">{formError.operator}</CFormFeedback>
              </div>
              <Form.Group className="mb-3">
                <Form.Label className='fw-medium'>Dth Number</Form.Label>
                <Form.Control type="number" placeholder="Enter dth number"  name='dthNumber' onChange={onHandle} value={value.dthNumber}/>
                <CFormFeedback className="text-danger fw-medium">{formError.dthNumber}</CFormFeedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className='fw-medium'>Mobile Number</Form.Label>
                <Form.Control type="number" placeholder="Enter mobile number"  name='mobileNumber' onChange={onHandle} value={value.mobileNumber}/>
                <CFormFeedback className="text-danger fw-medium">{formError.dthNumber}</CFormFeedback>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label className='fw-medium'>Recharge Amount</Form.Label>
                <Form.Control type="number" placeholder="Enter dth amount" name='amount'  onChange={onHandle} value={value.amount}/>
                <CFormFeedback className="text-danger fw-medium">{formError.amount}</CFormFeedback>
                <div className='mt-1'>
               <a href='#' className='text-light btn rounded bg-info border-0'>Plan</a>
                  </div>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className='fw-medium'>T-Pin</Form.Label>
                <Form.Control type="text" placeholder="Enter transaction pin" name='tpin'  onChange={onHandle} value={value.tpin}/>
                <CFormFeedback className="text-danger fw-medium" >{formError.tpin}</CFormFeedback>
                <div className="text-end m-0">
                  <NavLink className="text-decoration-none">Generate Or Forgot Pin ??</NavLink>
                </div>
              </Form.Group>
            
            <div className="text-center mb-3">
              <Button className="text-italic" type="submit">
                {' '}
                <CIcon icon={cilCursor} className="me-2" />
                Pay Now
              </Button>
              <Button className="text-italic mx-2 my-2" onClick={()=>generateLink()}>
                  <CIcon icon={cilCursor} className="me-2" />
                 Generate Payment Link
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
                  <td><button className='bg-success text-light rounded border-0'>Success</button></td>
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
