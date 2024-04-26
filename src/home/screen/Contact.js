import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Header from '../comp/Header'
import Footer from '../comp/Footer'
import Card from 'react-bootstrap/Card'
const Contact = () => {
  return (
    <div>
      <Header />
      <div className="container my-5">
      <h3 className="text-center my-5 text-dark ">Contact Us</h3>
        <div className="row">
          <div className="col-md-4 d-flex justify-content-center p-2">
            <Card border="primary" style={{ width: '18rem' }} className="text-center ">
              <Card.Header className="bg-dark text-light ">Contact</Card.Header>
              <Card.Body>
                <Card.Title>For Quick Answer</Card.Title>
                <Card.Text>+91 9941021198</Card.Text> 
                <Card.Text>+91 9941021198</Card.Text> 
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 d-flex justify-content-center p-2">
            <Card border="primary" style={{ width: '18rem' }} className="text-center">
              <Card.Header className="bg-dark text-light">Email</Card.Header>
              <Card.Body>
                <Card.Title>Customer Support</Card.Title>
                <Card.Text>xyz@gmail.in</Card.Text>
                <Card.Text>abcd@gmail.in</Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 d-flex justify-content-center p-2">
            <Card border="primary" style={{ width: '18rem' }} className="text-center">
              <Card.Header className="bg-dark text-light">Address</Card.Header>
              <Card.Body>
                <Card.Title>Location</Card.Title>
                <Card.Text>
                  xyz...
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="container">
        <h3 className="text-center mt-5 text-dark ">Enquiry Form</h3>
        <div className="row bg-light shadow p-3 mb-5 rounded text-light">
          <Form>
            <Form.Group className="mb-3 text-dark">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" required />
            </Form.Group>
            <Form.Group className="mb-3 text-dark">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3 text-dark">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="password" placeholder="Mobile number" required />
            </Form.Group>
            <Form.Group className="mb-3 text-dark">
              <Form.Label>Subject</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="type here..." required />
            </Form.Group>
            <div className='mb-5'>
               <Button variant="primary" className="me-2 " type="submit">
              Submit
            </Button>
            <Button variant="dark" className="me-2" type="submit">
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
