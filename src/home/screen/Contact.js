import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Header from '../comp/Header'
import Footer from '../comp/Footer'
import Card from 'react-bootstrap/Card'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [mobile,setMobile] = useState('')
  const [message,setMessage] = useState('')

  const handleSubmit = (e) => {
   e.preventDefault();
   
  const serviceId = "service_ybydcd4";
  const templateId = "template_la2r9mq";
  const publicKey = "YWt6q4QuRGKxjDWop";

  const templateParams = {
    name:name,
    email:email,
    mobile:mobile,
    message:message
  }
  emailjs.send(serviceId, templateId, templateParams,publicKey).then(
    function (response) {
      console.log('SUCCESS!', response.status, response.text);
      alert("message sent")
      setName('')
      setEmail('')
      setMobile('')
      setMessage('')
    },
    function (err) {
      console.log('FAILED...', err);
    },
  );
  }
  const cancelForm = () => {
    setName('')
    setEmail('')
    setMobile('')
    setMessage('')
  }
  return (
    <div>
      <Header />
      <div className="container my-5">
      <h3 className="text-center my-5 text-dark ">Contact Us</h3>
        <div className="row">
          <div className="col-md-4 d-flex justify-content-center p-2">
            <Card border="dark" style={{ width: '18rem' }} className="text-center ">
              <Card.Header className="bg-dark text-light fs-4 ">Contact</Card.Header>
              <Card.Body>
                <Card.Title>Mobile Number</Card.Title>
                <Card.Text className='fw-medium'>+91 99410 21198</Card.Text>  
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 d-flex justify-content-center p-2">
            <Card border="dark" style={{ width: '18rem' }} className="text-center">
              <Card.Header className="bg-dark text-light fs-4">Mail</Card.Header>
              <Card.Body>
                <Card.Title>Gmail</Card.Title>
                <Card.Text className='fw-medium'>razotransutility@gmail.com</Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 d-flex justify-content-center p-2">
            <Card border="dark" style={{ width: '18rem' }} className="text-center">
              <Card.Header className="bg-dark text-light fs-4">Address</Card.Header>
              <Card.Body>
                <Card.Title>Location</Card.Title>
                <Card.Text className='fw-medium'>
                  New No.32/2, Old No.137/2, Velachery Road, Little Mount, saidapet, Chennai - 600015
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <h3 className="text-center mt-5 text-dark ">Enquiry Form</h3>
        <div className="row bg-light shadow p-3 mb-5 rounded text-light">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 text-dark">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={name} placeholder="Enter name" required onChange={(e) =>setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3 text-dark">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" value={email} placeholder="Enter email" required onChange={(e) =>setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3 text-dark">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="password" value={mobile} placeholder="Mobile number" maxLength={13} required onChange={(e) =>setMobile(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3 text-dark">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" value={message} rows={3} placeholder="type here..." required onChange={(e) =>setMessage(e.target.value)}/>
            </Form.Group>
            <div className='mb-5'>
               <Button variant="primary" className="me-2 " type="submit">
              Submit
            </Button>
            <Button variant="dark" className="me-2" onClick={cancelForm}>
              Cancel
            </Button>
            </div>
           
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
