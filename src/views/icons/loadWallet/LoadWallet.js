import { Row, Col, Table } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import CIcon from '@coreui/icons-react'
import Form from 'react-bootstrap/Form'
import { CForm,CFormInput, CFormSelect } from '@coreui/react'
import { Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import React, { useState,useEffect } from 'react'
import { cilPlus } from '@coreui/icons'
import { CFormFeedback } from '@coreui/react'
import axios from 'axios'
import Randomstring from 'randomstring'
import { useNavigate } from "react-router-dom";

const LoadWallet = () => {

  const randomString = Randomstring.generate({
    length:8,
    charset:'alphabetic'
  });
  const navigate =useNavigate()

  const [lgShow, setLgShow] = useState(false)
  const [list,updateList] = useState([])
  const [formError, updateFormError] = useState({})
  const [value,setValue]=useState({
    remarks: '',
    amount: '',
    mobileNumber:'',
    currency: 'INR',
    receiptID: randomString,
  })

  const onHandle = (e) =>{
    setValue({...value,[e.target.name]:e.target.value})
   }

   useEffect(()=>{
    listLoadWallet()
    },[])

    const listLoadWallet = () =>{
      axios.get('https://backend-razo.vercel.app/list/loadWallet')
      .then((res)=>{
      const result = res.data;
      updateList(result)
   
      })
      .catch((error)=>{
        console.log(error)
      })
    }

  //  const uploadImage = (event)=>{
  //    const reader = new FileReader()
  //    const file = event.target.files[0]
  //    reader.readAsDataURL(file);
  //    reader.onload = () =>{
  //     setValue({...value,paySlip:reader.result})
  //    }
  //  }
  const handleSubmit = (e) =>{

    e.preventDefault()
         const validateErrors={} ;
        
         if (!value.mobileNumber.trim()) {
          validateErrors.mobileNumber = 'mobile number is required'
        }
        else if (value.mobileNumber.length < 10) {
          validateErrors.mobileNumber = 'mobile number must be 10 digit'
        }
        if (!value.remarks.trim()) {
          validateErrors.remarks = 'remarks required'
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
              console.log(jsonRes)
             if(jsonRes.msg === "success"){
             
               axios.post("https://backend-razo.vercel.app/loadwallet",value)
               .then((response)=>{
               const result = response.data;
               if(result.message === "success"){
                alert("wallet added successfully");
                navigate("/icons/loadWallet")
                listLoadWallet();
               }
               })
               .catch((error)=>{
                console.log(error)
               })
             }
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
   
    if (!value.mobileNumber.trim()) {
      validateErrors.mobileNumber = 'mobile number is required'
    }
    else if (value.mobileNumber.length < 10) {
      validateErrors.mobileNumber = 'mobile number must be 10 digit'
    }
    if (!value.remarks.trim()) {
      validateErrors.remarks = 'remarks required'
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
              <button className="btn btn-danger fw-medium btn-sm ">Refresh</button>
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
                <input type="date" className="rounded fw-bold w-100 text-center" />
              </div>
            </Col>
            <Col md={3} sm={12} className="text-center p-2">
              <div>
                <label className="p-2 h6">Ending Date</label>
              </div>
              <div>
                {' '}
                <input type="date" className="rounded fw-bold w-100 text-center" />
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
                  className="rounded fw-medium text-black w-100 text-center"
                />
              </div>
            </Col>
            <Col md={3} sm={12} className="text-center p-2 align-center">
              <div>
                {' '}
                <label className="p-2 h6">Status</label>
              </div>
              <div>
                <select className="rounded fw-medium h-30  border-2 w-100 text-center">
                  <option>Select Fund Status</option>
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
                <td>xyz solution</td>
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
                <td>xyz solution</td>
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
                <td>xyz solution</td>
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
        <CForm 
           onSubmit={handleSubmit}>
        <Modal.Body>
          <Row>
          <Col md={6} sm={12}>
            {/* <div className="p-2">
              <label className="h6 w-100">Deposit Bank</label>
              <div>
                <CFormSelect className="rounded fw-medium w-100 border-2" required onChange={onHandle} name='depositBank'>
                  <option className='text-secondary'>Select Bank</option>
                  <option>VANAVIL BUSINESS SOLUTIONS LLP ( 50200056493838 )</option>
                  <option>VANAVIL BUSINESS SOLUTIONS LLP ( 603305020941 )</option>
                  <option>VANAVIL BUSINESS SOLUTIONS LLP ( 269405000669 )</option>
                  <option>VANAVIL BUSINESS SOLUTIONS LLP ( 6972882244 )</option>
                  <option>VANAVIL BUSINESS SOLUTIONS LLP ( 39975964480 )</option>
                  <option>AXIS MPOS ( 923020032511361 )</option>
                  <option>YES BANK ( 041863400001113 )</option>
                  <option>Others ( 12345678 )</option>
                </CFormSelect>
                <CFormFeedback invalid>Please Select Bank</CFormFeedback>
              </div>
            </div> */}
            {/* <div className="p-2">
              <label className="h6 w-100">Ref No.</label>
              <div>
              <CFormInput
                type="text"
                placeholder="Enter Reference Number"
                className="rounded fw-medium text-black" required onChange={onHandle} name='refNo'
              />  
              </div>
              <CFormFeedback invalid>Please Enter Reference Number</CFormFeedback>
              
            </div> */}
                 <div className="p-2">
               <label className="h6 w-100">Mobile Number</label>
            <div>
              <CFormInput
                type="number"
                placeholder="Enter number"
                className="rounded fw-medium text-black"  onChange={onHandle} name='mobileNumber'
              />
            </div>
            <CFormFeedback className="text-danger fw-medium border-0">{formError.mobileNumber}</CFormFeedback>
            </div>

             <div className="p-2">
               <label className="h6 w-100">Amount</label>
            <div>
              <CFormInput
                type="text"
                placeholder="Enter Amount"
                className="rounded fw-medium text-black"  onChange={onHandle} name='amount'
              />
            </div>
            <CFormFeedback className="text-danger fw-medium border-0">{formError.amount}</CFormFeedback>
            </div>
          </Col>
          <Col md={6} sm={12}>
          <div className="p-2">
            <label className="h6 w-100">Remark</label>
            <div>
            <CFormInput
                type="text"
                placeholder="Enter Remark"
                className="rounded fw-medium text-black w-100"  onChange={onHandle} name='remarks'
              />  
              </div>
              <CFormFeedback className="text-danger fw-medium border-0">{formError.remarks}</CFormFeedback>
            </div>
           
            {/* <div className="p-2">
              <label className="h6 w-100">Ref No.</label>
              <div>
              <CFormInput
                type="text"
                placeholder="Enter Reference Number"
                className="rounded fw-medium text-black" required onChange={onHandle} name='refNo'
              />  
              </div>
              <CFormFeedback invalid>Please Enter Reference Number</CFormFeedback>
              
            </div> */}
          </Col>
          {/* <Col md={4} sm={12}> */}
          {/* <div className="p-2">
              <label className="h6 w-100">Payment Mode</label>
              <div>
                <CFormSelect className="rounded fw-medium w-100 border-2" required onChange={onHandle} name='paymentMode'>
                  <option className='text-secondary'>Select Payment</option>
                  <option>NET BANKING</option>
                  <option>NEFT</option>
                  <option>CASH</option>
                  <option>IMPS</option>
                  <option>Other</option>
                </CFormSelect>
              </div>
              <CFormFeedback invalid>Please Select Payment</CFormFeedback>
            </div> */}
            {/* <div className="p-2">
            <label className="h6 w-100">Pay Slip (Optional)</label>
            <div className="p-2">
              <CFormInput type='file' className='rounded' onChange={uploadImage} name='paySlip'/>
            </div>
            <CFormFeedback invalid>Please Select file</CFormFeedback>
            </div> */}
          {/* </Col> */}
          </Row>
         
        </Modal.Body>
       
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setLgShow(false)}>Cancel</Button>
          <Button variant="primary" type='submit'>Submit</Button>
          <Button variant="info" onClick={()=>generateLink()}>Send Link</Button>
        </Modal.Footer> 
        </CForm>
      </Modal>
      {/* modal */}
      <Row className='my-5'>
        <Col>
          <div className="shadow p-3 mb-5 bg-white rounded">
            <div className="fw-bold text-light bg-black p-2 rounded d-flex flex-row justify-content-between ">
              <h5 className="align-center">Wallet Load Request</h5>
              <button className="btn btn-light fw-medium rounde btn-sm" onClick={() => setLgShow(true)}>
                <CIcon icon={cilPlus} className="me-2" />
                NEW REQUEST
              </button>
            </div>
            <Table responsive>
              <thead>
                <tr>
                  <th className=''>User</th>
                  <th className=''>Transaction Id</th>
                  <th className=''>Date And Time</th>
                  <th>Amount</th>
                  <th>Status</th>
                  
                  <th>Remark</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  list.map((item,index)=>{
                    return(
                  <tr key={index} className='align-middle'>
                  <td><h6>{item.user}</h6></td>
                  <td><h6>{item.transactionId}</h6></td>
                  <td><h6>{item.rechargeTime}</h6></td>
                  <td><h6>Amount - {item.amount}</h6></td>
                  <td><h6>{item.status}</h6></td>
                  <td>
                    <h6>{item.remarks}</h6>
                  </td>
                  
                  <td><button className='bg-success text-light rounded border-0'>Success</button></td>
                </tr>
                    )
                  })
                }
               
              </tbody>
            </Table>
            <div className="p-2">
              <span>Showing of 1 to 0 of entires</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default LoadWallet
