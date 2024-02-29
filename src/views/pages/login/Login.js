import React, { useState,useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
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
  CFormFeedback,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import axios from 'axios'

const Login = () => {
  useEffect(() => {
    axios
      .get('http://localhost:4000')
      .then((res) => {
        if (res.data.valid) {
          navigate("/dashboard")
        } else {
          navigate('/')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  // const [name, setName] = useState('')

  const navigate = useNavigate('')
  const [validated, setValidated] = useState(false)
  const [value, setValue] = useState('')

  const OnHandle = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value })
  }
  axios.defaults.withCredentials = true
  const goToDashboard = (event) => {
    event.preventDefault()

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } 
    else {
      setValidated(true)
      console.log(value)
      const url = 'http://localhost:4000/login'
      axios
        .post(url, value)
        .then((res) => {
           if(res.data.Login){
            alert('Login Success')
            navigate('/dashboard')
           }
         
         
        })
        .catch((err) => alert('invaild Credientials'))
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
                <CForm
                  onSubmit={goToDashboard}
                  className="row g-3 needs-validation"
                  noValidate
                  validated={validated}
                >
                  <h1>Login</h1>
                  <p className="text-medium-emphasis"></p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Username"
                      name="userName"
                      required
                      onChange={OnHandle}
                    />
                    <CFormFeedback invalid>Please choose a username.</CFormFeedback>
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      name="password"
                      required
                      onChange={OnHandle}
                    />
                    <CFormFeedback invalid>Please choose a Password.</CFormFeedback>
                  </CInputGroup>
                  <CRow>
                    <CCol xs={6}>
                      <CButton color="primary" className="px-4" type="submit">
                        Login
                      </CButton>
                    </CCol>
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
