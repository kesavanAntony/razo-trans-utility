import { Row, Col, Table } from 'react-bootstrap'
import { cilPlus} from '@coreui/icons'
import Form from 'react-bootstrap/Form'
import { Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import React from 'react'
import CIcon from '@coreui/icons-react'

const AepsStatement = () => {
  return(
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
   <Container>
     <Navbar.Brand href="#home" className='fw-bold h3'>Aeps Statement</Navbar.Brand>
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
           <Button className="fw-medium mx-2" color='success' >Export</Button>
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
              <div> <label className="p-2 h6">Status</label></div>
             <div><select className="rounded fw-medium h-30 w-100 text-center border-2">
                <option disabled>Select Fund Status</option>
                <option>Success</option>
                <option>Failed</option>
                <option>Pending</option>
                <option>Reversed</option>
                <option>Refunded</option>
              </select></div>
              
            </Col>
       </Row>
     </Container>
   </div>
   <Row>
     <Col>
       <div className="shadow p-3 mb-5 bg-white rounded">
         <div className="fw-bold text-light bg-black p-2 rounded d-flex flex-row justify-content-between ">
           <h5 className="align-center">Aeps Statement</h5>
           {/* <button className="btn btn-light fw-medium rounded"><CIcon icon={cilPlus} className='me-2'/>NEW REQUEST</button> */}
         </div>
         <Table responsive>
           <thead>
             <tr>
               <th>Order Id</th>
               <th>User Details</th>
               <th>Bank Details</th>
               <th>Refrence Details</th>
               <th>Amount/ Commission</th>
               <th>Action</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td>1</td>
               <td>1</td>
               <td>Mark</td>
               <td>Otto</td>
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
    
 </div>
  )
}

export default AepsStatement
