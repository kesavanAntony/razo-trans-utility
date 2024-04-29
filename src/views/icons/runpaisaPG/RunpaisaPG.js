import { Row, Col, Table } from 'react-bootstrap'
import CIcon from '@coreui/icons-react'
import Form from 'react-bootstrap/Form'
import { Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import React,{useState} from 'react'
import { cilPlus} from '@coreui/icons'
import Modal from 'react-bootstrap/Modal';
import { CForm, CFormInput } from '@coreui/react';
import Randomstring from 'randomstring';
import { CFormFeedback } from '@coreui/react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const RunpaisaPG= () => {

  const [lgShow, setLgShow] = useState(false)
  const [formError, updateFormError] = useState({})
  const navigate =useNavigate()

  const randomString = Randomstring.generate({
    length:8,
    charset:'alphabetic'
  });

  const [value, setValue] = useState({
    mobileNumber: '',
    amount: '',
    email: '',
    remark:'',
    currency: 'INR',
    receiptID: randomString,

  })
 const onHandle = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }
  
  const handleSubmit = (e) =>{

    e.preventDefault()
         const validateErrors={} ;
         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!value.email.trim()) {
      validateErrors.email = 'email is required'
        }
        else if(!regex.test(value.email)){
          validateErrors.email = 'enter valid email'
        }
        if (!value.remark.trim()) {
          validateErrors.remark = 'remark is required'
        }
        if (!value.mobileNumber.trim()) {
          validateErrors.mobileNumber = 'mobile number is required'
        }
    
        if (!value.amount.trim()) {
          validateErrors.amount = 'amount is required'
        } 
        else if (value.amount < 10) {
          validateErrors.amount = 'amount must be above 10'
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
             if(jsonRes.msg === "success"){
              console.log(jsonRes)
               axios.post("https://backend-razo.vercel.app/wallet/easebuzzpg",value)
               .then((response)=>{
               const result = response.data;
               if(result.message === "success"){
                alert("requested sent");
                navigate("/icons/easeBuzz")
               }
               })
               .catch((error)=>{
                console.log(error)
               })
             }
            },
            prefill: {
              //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
              name: 'kesavan', //your customer's name
              email: 'xyz@example.com',
              contact: '9000090000', //Provide the customer's phone number for better conversion rates
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
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
if (!value.email.trim()) {
 validateErrors.email = 'email is required'
   }
   else if(!regex.test(value.email)){
     validateErrors.email = 'enter valid email'
   }
   if (!value.remark.trim()) {
     validateErrors.remark = 'remark is required'
   }
   if (!value.mobileNumber.trim()) {
     validateErrors.mobileNumber = 'mobile number is required'
   }

   if (!value.amount.trim()) {
     validateErrors.amount = 'amount is required'
   } 
   else if (value.amount < 10) {
     validateErrors.amount = 'amount must be above 10'
   }
   updateFormError(validateErrors)




if (Object.keys(validateErrors).length === 0 ) {


  axios
  .post('https://backend-razo.vercel.app/payment/link', value)
  .then((res) => {
    const result = res.data
   alert("payment link sent...")
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
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='fw-bold h3'>Runpaisa PG Request</Navbar.Brand>
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
                <input type="date" className="rounded fw-bold w-100 text-center" />
              </div>
            </Col>
            <Col md={4} sm={12} className="text-center p-2">
              <div>
                <label className="p-2 h6">Ending Date</label>
              </div>
              <div>
                {' '}
                <input type="date" className="rounded fw-bold w-100 text-center" />
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
                  className="rounded fw-medium text-black w-100 text-center"
                />
              </div>
            </Col>
          </Row>
          <Row>
          <Col md={4} sm={12} className="text-center p-2 align-center">
              <div> <label className="p-2 h6">Status</label></div>
             <div><select className="rounded fw-medium h-30 border-2 w-100 text-center">
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
              <h5 className="align-center">Runpaisa PG Request</h5>
              <button className="btn btn-light fw-medium rounded btn-sm" onClick={() => setLgShow(true)}><CIcon icon={cilPlus} className='me-2'/>NEW REQUEST</button>
              <button className="btn btn-light fw-medium rounded btn-sm" onClick={() => setLgShow(true)}><CIcon icon={cilPlus} className='me-2'/>Get Link</button>
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
        <CForm 
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
                className="rounded fw-medium text-black w-100" name='mobileNumber' onChange={onHandle} value={value.mobileNumber}
              /> 
              <CFormFeedback className="text-danger fw-medium">{formError.mobileNumber}</CFormFeedback> 
              </div>
            </div>
            <div className="p-2">
               <label className="h6 w-100">Remark</label>
            <div>
              <CFormInput
                type="text"
                placeholder="Enter Remark"
                className="rounded fw-medium text-black" name="remark" onChange={onHandle} value={value.remark}
              />
              <CFormFeedback className="text-danger fw-medium">{formError.remark}</CFormFeedback>
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
                className="rounded fw-medium text-black" name='amount' onChange={onHandle} value={value.amount}
              />
              <CFormFeedback className="text-danger fw-medium">{formError.amount}</CFormFeedback>
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
                className="rounded fw-medium text-black" name='email' onChange={onHandle} value={value.email}
              />
              <CFormFeedback className="text-danger fw-medium">{formError.email}</CFormFeedback>
            </div>
            </div>
          
          </Col>
          </Row>
         
        </Modal.Body>              
        <Modal.Footer>
          <Button variant="secondary"  onClick={() => setLgShow(false)}>Cancel</Button>
          <Button variant="primary" type='submit'>Submit</Button>
          <Button variant="info" onClick={()=>generateLink()}>Send Link</Button>
        </Modal.Footer>
        </CForm>
      </Modal>
    {/* modal */}
    </div>
  )
}

export default RunpaisaPG
