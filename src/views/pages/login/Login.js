import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import axios from 'axios'

const Login = () => {

  const navigate = useNavigate('')

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const goToDashboard = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, password }),
      });
      const data = await response.json();
      if(data.message === "Login successful"){
           navigate("/dashboard")
           alert(data.message)
      }
      else if (data.message === "Invalid credentials"){
        navigate("")
        alert("please check credientials")
      }
      else{
        alert("error")
      }
      
    } 
    catch (error) {
      alert('Error:', error);
     
    }

  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <div className="text-center m-2">
            <img
              src={require('../logo/rtu.png')}
              alt=""
              className=" bg-dark p-3 rounded"
              width="40%"
            />
          </div>
          <CCol md={6}>
            <CCard className="p-4">
              <CCardBody>
                <CForm onSubmit={goToDashboard}>
                  <h1>Login</h1>
                  <p className="text-medium-emphasis"></p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Username"
                      autoComplete="username"
                      name="userName"
                      onChange={(event) => setUserName(event.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="current-password"
                      name="password"
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol xs={6}>
                      <CButton color="primary" className="px-4" type="submit">
                        Login
                      </CButton>
                    </CCol>
                    {/* <CCol xs={6} className="text-end">
                        <CButton color="link" className="px-0 text-decoration-none">
                          Forgot password?
                        </CButton>
                      </CCol> */}
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
