import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../comp/Header';
import Footer from '../comp/Footer';
const Contact = () => {
  return (
    <div>
      <Header/>
        <div className='container'>
            <h3 className='text-center mt-5'>Contact Us</h3>
    <div className='row bg-light shadow p-3 mb-5 rounded text-light'>
     <Form>
     <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name"  required/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  required/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="password" placeholder="number" required/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='type here...' required/>
      </Form.Group>
      <Button variant="primary" className='me-2' type="submit">
        Submit
      </Button>
      <Button variant="dark" className="me-2" type="submit">
       Cancel
      </Button>
    </Form>
            </div>
        </div>
        <Footer/>
     
    </div>
  )
}

export default Contact
