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

const LoadWallet = () => {

  const [validated, setValidated] = useState(false)
  const [lgShow, setLgShow] = useState(false)
  const [list,updateList] = useState([])
  const [value,setValue]=useState({
    depositBank:"",
    amount:"",
    paymentMode:"",
    endingDate:"",
    refNo:"",
    paySlip:"",
    remarks:"",
  })

  const onHandle = (e) =>{
    setValue({...value,[e.target.name]:e.target.value})
   }

   useEffect(()=>{
    axios.get('https://backend-razo-2.onrender.com/list/loadWallet')
    .then((res)=>{
    const result = res.data;
    updateList(result)
    console.log(list)
    })
    .catch((error)=>{
      console.log(error)
    })
    },[])

   const uploadImage = (event)=>{
     const reader = new FileReader()
     const file = event.target.files[0]
     reader.readAsDataURL(file);
     reader.onload = () =>{
      setValue({...value,paySlip:reader.result})
     }
   }
  const handleSubmit = (event) =>{

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
    axios.post('https://backend-razo-2.onrender.com/loadWallet',value)
    .then(res =>{
      alert("Fund request Added successfully")
      console.log(res.data)
    })
    .catch(err => console.log(err)) 
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
        <CForm noValidate validated={validated}
           onSubmit={handleSubmit}>
        <Modal.Body>
          <Row>
          <Col md={4} sm={12}>
            <div className="p-2">
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
            </div>
            <div className="p-2">
              <label className=" w-100 h6">Ending Date</label>
              <div>
              <CFormInput type="date" id="validationCustom01" required onChange={onHandle} name='endingDate'/>
              </div>
              <CFormFeedback invalid>Please select Date</CFormFeedback>
            </div>
            <div className="p-2">
            <label className="h6 w-100">Remark</label>
            <div>
            <CFormInput
                type="text"
                placeholder="Enter Remark"
                className="rounded fw-medium text-black w-100" required onChange={onHandle} name='remarks'
              />  
              </div>
              <CFormFeedback invalid>Please Enter Remarks</CFormFeedback>
            </div>
          </Col>
          <Col md={4} sm={12}>
            <div className="p-2">
               <label className="h6 w-100">Amount</label>
            <div>
              <CFormInput
                type="text"
                placeholder="Enter Amount"
                className="rounded fw-medium text-black" required onChange={onHandle} name='amount'
              />
            </div>
            <CFormFeedback invalid>Please Enter Amount</CFormFeedback>
            </div>
           
            <div className="p-2">
              <label className="h6 w-100">Ref No.</label>
              <div>
              <CFormInput
                type="text"
                placeholder="Enter Reference Number"
                className="rounded fw-medium text-black" required onChange={onHandle} name='refNo'
              />  
              </div>
              <CFormFeedback invalid>Please Enter Reference Number</CFormFeedback>
              
            </div>
          </Col>
          <Col md={4} sm={12}>
          <div className="p-2">
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
            </div>
            <div className="p-2">
            <label className="h6 w-100">Pay Slip (Optional)</label>
            <div className="p-2">
              <CFormInput type='file' className='rounded' required onChange={uploadImage} name='paySlip'/>
            </div>
            <CFormFeedback invalid>Please Select file</CFormFeedback>
            </div>
          </Col>
          </Row>
         
        </Modal.Body>
       
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setLgShow(false)}>Cancel</Button>
          <Button variant="primary" type='submit'>Submit</Button>
        </Modal.Footer> 
        </CForm>
      </Modal>
      {/* modal */}
      <Row className='my-5'>
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
                  <th className='col-md-2'>#</th>
                  <th className='col-md-3'>Deposit Bank Details</th>
                  <th>Refrence Details</th>
                  <th>Amount</th>
                  <th>Remark</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  list.map((item,index)=>{
                    return(
                       <tr key={index} className='align-middle'>
                  <td><h6>{item.transactionId}</h6>
                  <p>{item.rechargeTime}</p></td>
                  <td><h6>Name - {item.depositBank}</h6></td>
                  <td>
                    <h6>Ref NO - {item.refNo}</h6>
                    <h6>Paydate - {item.endingDate}</h6>
                    <h6>PayMode - {item.paymentMode}</h6>
                  </td>
                  <td>{item.amount}</td>
                  <td>{item.remarks}</td>
                  <td><button className='bg-success text-light rounded'>Success</button></td>
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
