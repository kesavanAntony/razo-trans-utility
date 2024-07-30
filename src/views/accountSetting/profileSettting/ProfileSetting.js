
import React, { useState } from 'react'
import { Col, Row, Button } from 'react-bootstrap'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { NavLink } from 'react-router-dom';

const ProfileSetting = () => {

  const [key, setKey] = useState('profile details');

  return (
    
    <div>
         <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3  text-light fw-bolds"
    >
      <Tab eventKey="profile details" title="Profile Details">
        <div className="shadow p-3 mb-5 bg-white rounded">
              <div className="fw-bold text-light bg-black p-2 rounded">
                <h5>Personal Information</h5>
              </div>
        
        <Row>
          
            
              <Col md={4} sm={12}>
              <div className="p-2">
            <label className="h6">Name</label>
            <div>
            <input
                type="text"
                placeholder="Enter Name" value="Razo Trans Utility"
                className="rounded  text-dark w-100"
              />  
              </div>
            </div>
              <div className="p-2">
              <label className="h6 ">State</label>
              <div>
                <select className="rounded  w-100 border-2" >
                  <option>Select State</option>
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
                  <option selected>Tamilnadu</option>
                  <option>UP East</option>
                  <option>UP West</option>
                  <option>West Pengal</option>
                  <option>Dadra Nagar Haveli</option>
                  <option>Andhara Predesh</option>
                  <option>Delhi</option>
                  <option>Uttrakhand</option>
                  <option>Jharkhan</option>
                  <option>Andaman Nicobar</option>
                  <option>Arunachal Predesh</option>
                  <option>Daman Diu</option>
                  <option>Lakshadweep</option>
                  <option>Mizoram</option>
                  <option>Nagaland</option>
                  <option>Puducherry</option>
                  <option>Sikkim</option>
                  <option>Telangana</option>
                  <option>Tripura</option>
                </select>
              </div>
            </div>
            <div className="p-2">
            <label className="h6 ">Address</label>
            <div>
            <input
                type="text"
                placeholder="Enter Address"
                className="rounded  text-dark w-100"
                value="New No.32/2, Old No.137/2, Velachery Road, Little Mount, saidapet, Chennai - 600015"
              />  
              </div>
            </div>
          </Col>
          <Col md={4} sm={12}>
            <div className="p-2">
               <label className="h6 ">Mobile</label>
            <div>
              <input
                type="text"
                placeholder="Enter Mobile"
                className="rounded  text-dark w-100"
                value="+91 99410 21198"
              />
            </div>
            </div>
           
            <div className="p-2">
              <label className="h6">City</label>
              <div>
              <input
                type="text"
                placeholder="Enter Reference Number"
                className="rounded  text-dark w-100" required
                value="Chennai"
              />  
              </div>
              
            </div>
          </Col>
          <Col md={4} sm={12}>
          <div className="p-2">
               <label className="h6 ">Email</label>
            <div>
              <input
                type="text"
                placeholder="Enter Email"
                className="rounded  text-dark w-100"
                value="razotransutility@gmail.com"
              />
            </div>
            </div>
            <div className="p-2">
               <label className="h6 ">Pincode</label>
            <div>
              <input
                type="text"
                placeholder="Enter Pincode"
                className="rounded  text-dark w-100"
                value="600100"
              />
            </div>
            </div>
          </Col>
     
          </Row>
         </div>
      </Tab>


      <Tab eventKey="kyc data" title="Kyc Details">
        
      <div className="shadow p-3 mb-5 bg-white rounded" id="example-collapse-text2">
              <div className="fw-bold text-light bg-black p-2 rounded">
                <h5>KYC Details</h5>
              </div>
              <Row>
              <Col md={4} sm={12}>
              <div className="p-2">
            <label className="h6 ">Shop Name</label>
            <div>
            <input
                type="text"
                placeholder="Enter Shop Name" value="Razo Trans Utility"
                className="rounded  text-dark w-100"
              />  
              </div>
            </div>
          </Col>
          <Col md={4} sm={12}>
            <div className="p-2">
               <label className="h6 ">GST Number</label>
            <div>
              <input
                type="text"
                placeholder="Enter Value"
                className="rounded  text-dark w-100"
                value="33AANCR2103B1Z1" disabled
              />
            </div>
            </div>
          </Col>
          <Col md={4} sm={12}>
          <div className="p-2">
               <label className="h6 ">Pancard Number</label>
            <div>
              <input
                type="text"
                placeholder="Enter Pancard Number"
                className="rounded  text-dark w-100"
                value="AANCR2103B" disabled
              />
            </div>
            </div>
          </Col>
          </Row>
         </div>

      </Tab>
      <Tab eventKey="password manager" title="Password Manager">
      <div className="shadow p-3 mb-5 bg-white rounded" id="example-collapse-text3">
              <div className="fw-bold text-light bg-black p-2 rounded">
                <h5>Password Reset</h5>
              </div>
              <Row>
              <Col md={4} sm={12}>
              <div className="p-2">
            <label className="h6 ">Old Password</label>
            <div>
            <input
                 type="password"
                placeholder="Enter Value"
                className="rounded  text-dark w-100"
              />  
              </div>
            </div>
          </Col>
          <Col md={4} sm={12}>
          <div className="p-2">
            <label className="h6 ">New Password</label>
            <div>
            <input
               type="password"
                placeholder="Enter Value"
                className="rounded  text-dark w-100"
              />  
              </div>
            </div>
          </Col>
          <Col md={4} sm={12}>
          <div className="p-2">
            <label className="h6 ">Confirm Password</label>
            <div>
            <input
                type="password"
                placeholder="Enter Value"
                className="rounded  text-dark w-100"
              />  
              </div>
            </div>
          </Col>
          <div className='text-end'>  <Button variant="secondary">Password Reset</Button></div>
        
          </Row>
         </div>

      </Tab>
      <Tab eventKey="pin reset" title="Pin Manager">
      <div className="shadow p-3 mb-5 bg-white rounded" id="example-collapse-text4">
              <div className="fw-bold text-light bg-black p-2 rounded">
                <h5>Password Reset</h5>
              </div>
              <Row>
              <Col md={4} sm={12}>
              <div className="p-2">
            <label className="h6 ">New Pin</label>
            <div>
            <input
                 type="password"
                placeholder="Enter Value"
                className="rounded  text-dark w-100"
              />  
              </div>
            </div>
          </Col>
          <Col md={4} sm={12}>
          <div className="p-2">
            <label className="h6 ">Confirmed Pin</label>
            <div>
            <input
               type="password"
                placeholder="Enter Value"
                className="rounded  text-dark w-100"
              />  
              </div>
            </div>
          </Col>
          <Col md={4} sm={12}>
          <div className="p-2">
            <label className="h6 ">Otp</label>
            <div>
            <input
                type="password"
                placeholder="otp"
                className="rounded  text-dark w-100"
              />  
              </div>
            </div>
            <div className='text-end m-2'><NavLink className="text-decoration-none">Get Otp</NavLink></div>
          </Col>
          <div className='text-end'>  <Button variant="secondary">Password Reset</Button></div>
        
          </Row>
         </div>
      </Tab>
      <Tab eventKey="" title="Logout">
        Logout....
      </Tab>
    </Tabs>

    </div>
  )
}

export default ProfileSetting
