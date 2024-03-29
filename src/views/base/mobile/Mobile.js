import CIcon from '@coreui/icons-react'
import React, { useEffect } from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { NavLink } from 'react-router-dom'
import { cilCursor } from '@coreui/icons'
import Table from 'react-bootstrap/Table'
import { CFormFeedback } from '@coreui/react'
import { useState } from 'react'
import axios from 'axios'

const Mobile = () => {
  // const [validated, setValidated] = useState(false)
  const [list, updateList] = useState([])
  const [formError, updateFormError] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [value, setValue] = useState({
    circle: '',
    operator: '',
    mobileNumber: '',
    amount: '',
    tpin: '',
    currency: 'INR',
    receiptID: 'jgyhfchd',
  })

  useEffect(() => {
    axios
      .get('https://backend-razo.vercel.app/list/mobile/recharge')
      .then((res) => {
        const result = res.data
        updateList(result)
        console.log(result)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const onHandle = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  //  const amount = 100;
  // const currency= "INR"
  // const receiptID =  "qwswee"

  const handleSubmit = (e) => {
    e.preventDefault()
    updateFormError(validate(value))
    setIsSubmit(true)

    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(value)

      axios
        .post('https://backend-razo.vercel.app/order', value)
        .then((res) => {
          const result = res.data
          console.log(result)
          console.log(result.amount)

          var options = {
            key: 'rzp_test_Q6NMBBDHq9vpwS', // Enter the Key ID generated from the Dashboard
            amount: result.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: result.currency,
            name: 'Optimista Corp', //your business name
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
            alert(response.error.code)
            alert(response.error.description)
            alert(response.error.source)
            alert(response.error.step)
            alert(response.error.reason)
            alert(response.error.metadata.order_id)
            alert(response.error.metadata.payment_id)
          })
          rzp1.open()
          e.preventDefault()
        })
        .catch((err) => console.log(err))
    }
  }

  const validate = (values) => {
    const errors = {}

    if (!values.circle) {
      errors.circle = 'select your Circle'
    }
    if (!values.operator) {
      errors.operator = 'select your operator'
    }
    if (!values.mobileNumber) {
      errors.mobileNumber = 'mobile number is required'
    }

    if (!values.amount) {
      errors.amount = 'amount is required'
    } else if (values.amount < 10) {
      errors.amount = 'amount must be above 10'
    }
    if (!values.tpin) {
      errors.tpin = 'tpin is required'
    } else if (values.tpin < 4) {
      errors.tpin = 'enter 4 digit number'
    }
    return errors
  }

  // useEffect(()=>{

  //   if(Object.keys(formError).length === 0 && isSubmit){

  //   }
  // },[formError])

  // setValidated(true)
  // console.log(value)
  // axios.post('https://backend-razo.vercel.app/order',value)
  // .then(res => {
  //   const result = res.data;
  //   console.log(result)
  // })

  //  .catch(err => console.log(err))

  // const paymenthandler =async (e) =>{
  // const response = await fetch("https://backend-razo.vercel.app/order",{
  //   method:"POST",
  //   body:JSON.stringify({
  //     amount,
  //     currency,
  //     receipt:receiptID
  //   }),
  //   headers :{
  //      "Content-Type": "application/json",
  //   },
  //  })
  //  const order = await response.json();
  //  console.log(order)

  //   var options = {
  //     "key": "rzp_test_Q6NMBBDHq9vpwS", // Enter the Key ID generated from the Dashboard
  //     "amount": value.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  //     "currency":value.currency,
  //     "name": "Optimista Corp", //your business name
  //     "description": "Test Transaction",
  //     "image": <img src={require ("../rtu.png")} alt='razologo'/>,
  //     "order_id": '', //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  //     "handler": async function (response){
  //        const body ={
  //         ...response
  //        };
  //        const validateRes = await fetch("https://backend-razo.vercel.app/order/validate",{
  //         method:"POST",
  //         body:JSON.stringify(body),
  //         headers :{
  //            "Content-Type": "application/json",
  //         },
  //        })
  //        const jsonRes = await validateRes.json()
  //        console.log(jsonRes)
  //     },
  //     "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
  //         "name": "kesavan", //your customer's name
  //         "email": "xyz@example.com",
  //         "contact": "9000090000"  //Provide the customer's phone number for better conversion rates
  //     },
  //     "notes": {
  //         "address": "Razorpay Corporate Office"
  //     },
  //     "theme": {
  //         "color": "#3399cc"
  //     }

  //       };

  // var rzp1 = new window.Razorpay(options);
  // rzp1.on('payment.failed', function (response){
  //         alert(response.error.code);
  //         alert(response.error.description);
  //         alert(response.error.source);
  //         alert(response.error.step);
  //         alert(response.error.reason);
  //         alert(response.error.metadata.order_id);
  //         alert(response.error.metadata.payment_id);
  //         });
  //        rzp1.open();
  //        e.preventDefault();

  //   setValidated(true)
  //   axios.post('https://backend-razo.vercel.app/mobile/recharge',value)
  //   .then(res => {
  //     console.log(res.data)
  //     alert("mobile recharged successfully")
  //   })
  //    .catch(err => console.log(err))

  return (
    <div>
      <Row className="m-2">
        <Col md={4} sm={12} className="">
          <div className="shadow p-3 mb-5 bg-white rounded">
            <div className="fw-bold text-light bg-black p-2  rounded-2">
              <h5>Mobile Recharge</h5>
            </div>
            <Form className="m-4 border-bottom" onSubmit={handleSubmit}>
              <div className="mb-3">
                <Form.Label className="fw-medium">Circle</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="circle"
                  required
                  id="validationCustom01"
                  onChange={onHandle}
                  value={value.circle}
                >
                  <option className="text-secondary" >
                    Select Circle
                  </option>
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
                <CFormFeedback className="text-danger fw-medium">{formError.circle}</CFormFeedback>
              </div>
              <div className="mb-3">
                <Form.Label className="fw-medium">Mobile Operator</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="operator"
                  id="validationCustom02"
                  onChange={onHandle}
                  value={value.operator}
                >
                  <option className="text-secondary">
                    Select Operator
                  </option>
                  <option>VODAFONE</option>
                  <option>BSNL SPECIAL</option>
                  <option>TATADOCOMO</option>
                  <option>TATADOCOMO SPECIAL</option>
                  <option>JIORECH</option>
                  <option>IDEA</option>
                  <option>AIRTEL</option>
                </Form.Select>
                <CFormFeedback className="text-danger fw-medium">
                  {formError.operator}
                </CFormFeedback>
              </div>
              <Form.Group className="mb-3">
                <Form.Label className="fw-medium">Mobile Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter mobile number"
                  name="mobileNumber"
                  onChange={onHandle}
                  value={value.mobileNumber}
                />
                <CFormFeedback className="text-danger fw-medium">
                  {formError.mobileNumber}
                </CFormFeedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fw-medium">Recharge Amount</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter mobile amount"
                  name="amount"
                  onChange={onHandle}
                  value={value.amount}
                />
                <CFormFeedback className="text-danger fw-medium">{formError.amount}</CFormFeedback>

                <div className="mt-1">
                  <button className="text-light rounded bg-info border-0">Plan</button>
                </div>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fw-medium">T-Pin</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter transaction pin"
                  name="tpin"
                  onChange={onHandle}
                  value={value.tpin}
                />
                <CFormFeedback className="text-danger fw-medium">{formError.tpin}</CFormFeedback>
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
                {list.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="align-middle">
                        {item.transactionId}
                        <p>{item.rechargeTime}</p>
                      </td>
                      <td className="align-middle">
                        <h6>Number - {item.mobileNumber}</h6>
                        <h6>Operator - {item.operator}</h6>
                      </td>
                      <td className="align-middle">
                        <h6>Amount-{item.rechargeAmount}</h6>
                      </td>
                      <td className="align-middle">
                        <button className="bg-success text-light rounded">Success</button>
                      </td>
                    </tr>
                  )
                })}
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
