import { Row, Col, Table } from 'react-bootstrap'
import { cilPlus } from '@coreui/icons'
import Form from 'react-bootstrap/Form'
import { Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import React from 'react'
import CIcon from '@coreui/icons-react'

const BillpayStatement = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold h3">
            Bill Pay Statement
          </Navbar.Brand>
        </Container>
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
                className="me-2  fw-medium"
                aria-label="Search"
              />
              <Button className="btn btn-danger fw-medium">Refresh</Button>
              <Button className="fw-medium mx-2" color="success">
                Export
              </Button>
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
                  className="rounded fw-medium text-black "
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={3} sm={12} className="text-center p-2 align-center">
              <div>
                {' '}
                <label className="p-2 h6">Status</label>
              </div>
              <div>
                <select className="rounded fw-medium h-30 p-1 border-2">
                  <option>Select Fund Status</option>
                  <option>Success</option>
                  <option>Pending</option>
                  <option>Reversed</option>
                  <option>ReFunded</option>
                </select>
              </div>
            </Col>
            <Col md={3} sm={12} className="text-center p-2 align-center">
              <div>
                {' '}
                <label className="p-2 h6">Biller</label>
              </div>
              <div >
                <select className="rounded fw-medium h-30 p-1 border-2 w-50">
                  <option >Select Biller</option>
                  <option>DHBVN - HARYANA</option>
                  <option>Jodhpur Vidyut Vitran Nigam - RAJASTHAN</option>
                  <option>Ajmer Vidyut Vitran Nigam - RAJASTHAN</option>
                  <option>PSPCL - PUNJAB</option>
                  <option>Kota Electricity Distribution - RAJASTHAN</option>
                  <option>Jaipur Vidyut Vitran Nigam - RAJASTHAN</option>
                  <option>UHBVN - HARYANA</option>
                  <option>UPPCL (URBAN) - UTTAR PRADESH</option>
                  <option>UPPCL (RURAL) - UTTAR PRADESH</option>
                  <option>Noida Power - NOIDA</option>
                  <option>APSPDCL - ANDHRA PRADESH</option>
                  <option>APEPDCL - ANDHRA PRADESH</option>
                  <option>APDCL (RAPDR) - ASSAM</option>
                  <option>APDCL (Non-RAPDR) - ASSAM</option>
                  <option>SBPDCL - BIHAR</option>
                  <option>NBPDCL - BIHAR</option>
                  <option >India Power - BIHAR</option>
                  <option >CSPDCL - CHHATTISGARH</option>
                  <option >UTTAR GUJARAT VIJ CO LTD UGVCL - GUJARAT</option>
                  <option >PASCHIM GUJARAT PGVCL - GUJARAT</option>
                  <option >MADHYA GUJARAT MGVCL - GUJARAT</option>
                  <option >DAKSHIN GUJARAT DGVCL - GUJARAT</option>
                  <option>BESL - BHARATPUR</option>
                  <option >WBSEDCL - WEST BENGAL</option>
                  <option >POSTPAID VODAFONE</option>
                  <option >Idea POSTPAID</option>
                  <option >Airtel POSTPAID</option>
                  <option >BkESL - BIKANER</option>
                  <option>Poorv Kshetra Vitaran (Urban) - MADHYA PRADESH</option>
                  <option >Poorv Kshetra Vitaran (Rural) - MADHYA PRADESH</option>
                  <option >Madhya Kshetra Vitaran (Urban) - MADHYA PRADESH</option>
                  <option >Madhya Kshetra Vitaran (Rural) - MADHYA PRADESH</option>
                  <option >Adani Electricity - MUMBAI</option>
                  <option>BEST Undertaking - MUMBAI</option>
                  <option >MSEDC - MAHARASHTRA</option>
                  <option >SNDL Power - NAGPUR</option>
                  <option>Tata Power - MUMBAI</option>
                  <option >Torrent Power - BHIWANDI</option>
                  <option>Torrent Power - SURAT</option>
                  <option >Himachal Pradesh State Electricity Board</option>
                  <option >Adani Electricity (ON-US)</option>
                  <option >Adania?Electricitya?Mumbaia?Limited</option>
                  <option >Ajmer Vidyut Vitran Nigam Limited (AVVNL)</option>
                  <option >Bangalore Electricity Supply Co. Ltd (BESCOM)</option>
                  <option >BSES Rajdhani Power Limited</option>
                  <option >BSES Yamuna Power Limited</option>
                  <option >Calcutta Electric Supply Corporation (CESC)</option>
                  <option >CESU, Odisha</option>
                  <option >Chamundeshwari Electricity Supply Corp Ltd (CESCOM)</option>
                  <option >Daman and Diu Electricity</option>
                  <option >Department of Power, Government of Arunachal Pradesh</option>
                  <option >Department of Power, Nagaland</option>
                  <option >DNH Power Distribution Company Limited</option>
                  <option >Electricity Department Chandigarh</option>
                  <option >Goa Electricity Department - GOA</option>
                  <option >Goa Electricity Department - GOA Demand Note</option>
                  <option >Goa Electricity Department - GOA Installment Plan</option>
                  <option >Government of Puducherry Electricity Department</option>
                  <option >Gulbarga Electricity Supply Company Limited</option>
                  <option >Himachal Pradesh State Electricity Board</option>
                  <option >Hubli Electricity Supply Company Ltd (HESCOM)</option>
                  <option >Jammua?anda?Kashmira?Powera?Developmenta?Department</option>
                  <option>Jamshedpur Utilities</option>
                  <option>Jharkhand Bijli Vitran Nigam Limited (JBVNL)</option>
                  <option >Kanpur Electricity Supply Company</option>
                  <option >Kerala State Electricity Board Ltd. (KSEBL)</option>
                  <option >M.P. Paschim Kshetra Vidyut Vitaran</option>
                  <option >Mangalore Electricity Supply Co. Ltd (MESCOM)</option>
                  <option>Meghalaya Power Dist Corp Ltd</option>
                  <option >
                    MP Poorva Kshetra Vidyut Vitaran Co. Ltd Jabalpur - NGB billing system
                  </option>
                  <option >NESCO, Odisha</option>
                  <option >New Delhi Municipal Council (NDMC) - Electricity</option>
                  <option >Power &amp; Electricity Department - Mizoram</option>
                  <option >Sikkim Power - RURAL</option>
                  <option>Sikkim Power - URBAN</option>
                  <option >SOUTHCO, Odisha</option>
                  <option >Tamil Nadu Electricity Board (TNEB)</option>
                  <option>Tata Power - Delhi</option>
                  <option >Torrent Power</option>
                  <option >Torrent Power - Agra</option>
                  <option >Torrent Power - Ahmedabad</option>
                  <option >Torrent Power - SMK</option>
                  <option >TP Ajmer Distribution Ltd (TPADL)</option>
                  <option >Tripura Electricity Corp Ltd</option>
                  <option >Uttarakhand Power Corporation Limited</option>
                  <option >Uttarakhand Power Corporation Limited (OLD)</option>
                  <option >WESCO Utility</option>
                  <option >
                    West Bengal State Electricity Distribution Co. Ltd (WBSEDCL)
                  </option>
                </select>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Row>
        <Col>
          <div className="shadow p-3 mb-5 bg-white rounded">
            <div className="fw-bold text-light bg-black p-2 rounded d-flex flex-row justify-content-between ">
              <h5 className="align-center">Bill Pay Statement</h5>
              {/* <button className="btn btn-light fw-medium rounded"><CIcon icon={cilPlus} className='me-2'/>NEW REQUEST</button> */}
            </div>
            <Table responsive>
              <thead>
                <tr>
                  <th>Order Id</th>
                  <th>User Details</th>
                  <th>Transaction Details</th>
                  <th>Reference details</th>
                  <th>Amount/ Commission</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
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

export default BillpayStatement
