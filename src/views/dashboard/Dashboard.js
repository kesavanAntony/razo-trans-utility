import { cilCheck, cilPhone, cilReload, cilXCircle } from '@coreui/icons'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CIcon from '@coreui/icons-react'


const Dashboard = () => {


  return (
    <>
      <div>
        <Row>
          {/* apes statisctics */}
          <Col md={4} xs={12}>
            <div className="shadow p-3 mb-5 bg-white rounded m-2">
              <div className="bg-primary h5 fw-bold p-2 text-light text-center rounded">
                Aeps Sale Statictics
              </div>
              <div className="d-flex flex-row justify-evenly items-center border p-2 rounded">
                <div className="text-center w-100 fw-medium ">
                  <h6>$ 0</h6>
                  <span>Today Sales</span>
                </div>
                <div className="text-center w-100 fw-medium">
                  <h6>$ 0</h6>
                  <span>Month Sales</span>
                </div>
                <div className="text-center w-100 fw-medium">
                  <h6>$ 0</h6>
                  <span>Last Month Sales</span>
                </div>
              </div>
              <div>
                <table className="my-2 w-100 border">
                  <thead className="bg-primary text-light text-center">
                    <tr>
                      <th>Status</th>
                      <th>Today</th>
                      <th>This Month</th>
                      <th>Last Month</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center border-bottom">
                      <td>
                        <div className="text-center ">
                          <CIcon icon={cilCheck} className="me-2 text-success " />
                        </div>
                        <div className="text-center  ">
                          <span className="h6">success</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                    </tr>
                    <tr className="text-center border-bottom">
                      <td>
                        <div className="text-center">
                          <CIcon icon={cilReload} className="me-2 text-danger" />
                        </div>
                        <div className="text-center">
                          <span className="h6">Pending</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        {' '}
                        <div className="text-center ">
                          <CIcon icon={cilXCircle} className="me-2 text-danger" />
                        </div>
                        <div className="text-center">
                          <span className="h6">Failed</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Col>
          {/* bill pay statiscts */}
          <Col md={4} xs={12}>
            <div className="shadow p-3 mb-5 bg-white rounded m-2">
              <div className="bg-secondary h5 fw-bold p-2 text-light text-center rounded">
                Bill Pay Statictics
              </div>
              <div className="d-flex flex-row justify-evenly items-center border p-2 rounded">
                <div className="text-center w-100 fw-medium ">
                  <h6>$ 0</h6>
                  <span>Today Sales</span>
                </div>
                <div className="text-center w-100 fw-medium">
                  <h6>$ 0</h6>
                  <span>Month Sales</span>
                </div>
                <div className="text-center w-100 fw-medium">
                  <h6>$ 0</h6>
                  <span>Last Month Sales</span>
                </div>
              </div>
              <div>
                <table className="my-2 w-100 border">
                  <thead className="bg-secondary text-light text-center">
                    <tr>
                      <th>Status</th>
                      <th>Today</th>
                      <th>This Month</th>
                      <th>Last Month</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center border-bottom">
                      <td>
                        <div className="text-center ">
                          <CIcon icon={cilCheck} className="me-2 text-success " />
                        </div>
                        <div className="text-center  ">
                          <span className="h6">success</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                    </tr>
                    <tr className="text-center border-bottom">
                      <td>
                        <div className="text-center">
                          <CIcon icon={cilReload} className="me-2 text-danger" />
                        </div>
                        <div className="text-center">
                          <span className="h6">Pending</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        {' '}
                        <div className="text-center ">
                          <CIcon icon={cilXCircle} className="me-2 text-danger" />
                        </div>
                        <div className="text-center">
                          <span className="h6">Failed</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Col>

          {/* 2 */}
          <Col md={4} xs={12}>
            <div className="shadow p-3 mb-5 bg-white rounded m-2">
              <div className=" h5 fw-bold p-2  text-center rounded">
                <table className="w-100 border">
                  <tbody>
                  <tr className="bg-info text-light">
                    <td className="p-2">
                      <img src={require('../img/desk.png')} alt="" width={90} />
                      <h5 className="fw-bold">Timing - 10 AM to 7 PM</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5>
                        <CIcon icon={cilPhone} className="me-2" />
                        Call Us:
                      </h5>
                      <p className="">044-45270126</p>
                      <h5>Email Us:</h5>
                      <p className="">xyz@gmail.com</p>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          {/* Money Transfer Sales Statistics */}
          <Col md={4} xs={12}>
            <div className="shadow p-3 mb-5 bg-white rounded m-2">
              <div className="bg-success h5 fw-bold p-2 text-light text-center rounded">
                Money Transfer Sales Statistics
              </div>
              <div className="d-flex flex-row justify-evenly items-center border p-2 rounded">
                <div className="text-center w-100 fw-medium ">
                  <h6>$ 0</h6>
                  <span>Today Sales</span>
                </div>
                <div className="text-center w-100 fw-medium">
                  <h6>$ 0</h6>
                  <span>Month Sales</span>
                </div>
                <div className="text-center w-100 fw-medium">
                  <h6>$ 0</h6>
                  <span>Last Month Sales</span>
                </div>
              </div>
              <div>
                <table className="my-2 w-100 border">
                  <thead className="bg-success text-light text-center">
                    <tr>
                      <th>Status</th>
                      <th>Today</th>
                      <th>This Month</th>
                      <th>Last Month</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center border-bottom">
                      <td>
                        <div className="text-center ">
                          <CIcon icon={cilCheck} className="me-2 text-success " />
                        </div>
                        <div className="text-center  ">
                          <span className="h6">success</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                    </tr>
                    <tr className="text-center border-bottom">
                      <td>
                        <div className="text-center">
                          <CIcon icon={cilReload} className="me-2 text-danger" />
                        </div>
                        <div className="text-center">
                          <span className="h6">Pending</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        {' '}
                        <div className="text-center ">
                          <CIcon icon={cilXCircle} className="me-2 text-danger" />
                        </div>
                        <div className="text-center">
                          <span className="h6">Failed</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Col>
          {/* Recharge Sales Statistics */}
          <Col md={4} xs={12}>
            <div className="shadow p-3 mb-5 bg-white rounded m-2">
              <div className="bg-danger h5 fw-bold p-2 text-light text-center rounded">
                Recharge Sales Statistics
              </div>
              <div className="d-flex flex-row justify-evenly items-center border p-2 rounded">
                <div className="text-center w-100 fw-medium ">
                  <h6>$ 0</h6>
                  <span>Today Sales</span>
                </div>
                <div className="text-center w-100 fw-medium">
                  <h6>$ 0</h6>
                  <span>Month Sales</span>
                </div>
                <div className="text-center w-100 fw-medium">
                  <h6>$ 0</h6>
                  <span>Last Month Sales</span>
                </div>
              </div>
              <div>
                <table className="my-2 w-100 border">
                  <thead className="bg-danger text-light text-center">
                    <tr>
                      <th>Status</th>
                      <th>Today</th>
                      <th>This Month</th>
                      <th>Last Month</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center border-bottom">
                      <td>
                        <div className="text-center ">
                          <CIcon icon={cilCheck} className="me-2 text-success " />
                        </div>
                        <div className="text-center  ">
                          <span className="h6">success</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                    </tr>
                    <tr className="text-center border-bottom">
                      <td>
                        <div className="text-center">
                          <CIcon icon={cilReload} className="me-2 text-danger" />
                        </div>
                        <div className="text-center">
                          <span className="h6">Pending</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        {' '}
                        <div className="text-center ">
                          <CIcon icon={cilXCircle} className="me-2 text-danger" />
                        </div>
                        <div className="text-center">
                          <span className="h6">Failed</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Col>
          {/* 2-2 */}
          <Col md={4} xs={12}>
            <div className="shadow p-3 mb-5 bg-white rounded m-2">
              <div className=" h5 fw-bold p-2  text-center rounded">
                <table className="w-100 border">
                  <thead className="bg-primary">
                    <tr>
                      <th colSpan={3} className="h5 text-light p-2">
                        Balances
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border">
                      <td className="p-2">#</td>
                      <td>Wallet Type</td>
                      <td>Amount</td>
                    </tr>
                    <tr className="border">
                      <td className="p-2">₹</td>
                      <td>Utility Balance</td>
                      <td>1198.66</td>
                    </tr>
                    <tr className="border">
                      <td className="p-2">₹</td>
                      <td>Aeps Balance</td>
                      <td>1198.66</td>
                    </tr>
                    <tr className="border">
                      <td className="p-2">₹</td>
                      <td>Microatm Balance</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          {/* PG Payment Sales Statistics */}
          <Col md={4} xs={12}>
            <div className="shadow p-3 mb-5 bg-white rounded m-2">
              <div className="bg-info h5 fw-bold p-2 text-light text-center rounded">
                PG Payment Sales Statistics
              </div>
              <div className="d-flex flex-row justify-evenly items-center border p-2 rounded">
                <div className="text-center w-100 fw-medium ">
                  <h6>$ 0</h6>
                  <span>Today Sales</span>
                </div>
                <div className="text-center w-100 fw-medium">
                  <h6>$ 0</h6>
                  <span>Month Sales</span>
                </div>
                <div className="text-center w-100 fw-medium">
                  <h6>$ 0</h6>
                  <span>Last Month Sales</span>
                </div>
              </div>
              <div>
                <table className="my-2 w-100 border">
                  <thead className="bg-info text-light text-center">
                    <tr>
                      <th>Status</th>
                      <th>Today</th>
                      <th>This Month</th>
                      <th>Last Month</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center border-bottom">
                      <td>
                        <div className="text-center ">
                          <CIcon icon={cilCheck} className="me-2 text-success " />
                        </div>
                        <div className="text-center  ">
                          <span className="h6">success</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                    </tr>
                    <tr className="text-center border-bottom">
                      <td>
                        <div className="text-center">
                          <CIcon icon={cilReload} className="me-2 text-danger" />
                        </div>
                        <div className="text-center">
                          <span className="h6">Pending</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        {' '}
                        <div className="text-center ">
                          <CIcon icon={cilXCircle} className="me-2 text-danger" />
                        </div>
                        <div className="text-center">
                          <span className="h6">Failed</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Col>
          {/*Payout Sales Statistics */}
          <Col md={4} xs={12}>
            <div className="shadow p-3 mb-5 bg-white rounded m-2">
              <div className="bg-dark h5 fw-bold p-2 text-light text-center rounded">
                Payout Sales Statistics
              </div>
              <div className="d-flex flex-row justify-evenly items-center border p-2 rounded">
                <div className="text-center w-100 fw-medium ">
                  <h6>$ 0</h6>
                  <span>Today Sales</span>
                </div>
                <div className="text-center w-100 fw-medium">
                  <h6>$ 0</h6>
                  <span>Month Sales</span>
                </div>
                <div className="text-center w-100 fw-medium">
                  <h6>$ 0</h6>
                  <span>Last Month Sales</span>
                </div>
              </div>
              <div>
                <table className="my-2 w-100 border">
                  <thead className="bg-dark text-light text-center">
                    <tr>
                      <th>Status</th>
                      <th>Today</th>
                      <th>This Month</th>
                      <th>Last Month</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center border-bottom">
                      <td>
                        <div className="text-center ">
                          <CIcon icon={cilCheck} className="me-2 text-success " />
                        </div>
                        <div className="text-center  ">
                          <span className="h6">success</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                    </tr>
                    <tr className="text-center border-bottom">
                      <td>
                        <div className="text-center">
                          <CIcon icon={cilReload} className="me-2 text-danger" />
                        </div>
                        <div className="text-center">
                          <span className="h6">Pending</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        {' '}
                        <div className="text-center ">
                          <CIcon icon={cilXCircle} className="me-2 text-danger" />
                        </div>
                        <div className="text-center">
                          <span className="h6">Failed</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          {/*Uti Pancard Sales Statistics */}
          <Col md={4} xs={12}>
            <div className="shadow p-3 mb-5 bg-white rounded m-2">
              <div className="bg-warning h5 fw-bold p-2 text-light text-center rounded">
                Uti Pancard Sales Statistics
              </div>
              <div className="d-flex flex-row justify-evenly items-center border p-2 rounded">
                <div className="text-center w-100 fw-medium ">
                  <h6>$ 0</h6>
                  <span>Today Sales</span>
                </div>
                <div className="text-center w-100 fw-medium">
                  <h6>$ 0</h6>
                  <span>Month Sales</span>
                </div>
                <div className="text-center w-100 fw-medium">
                  <h6>$ 0</h6>
                  <span>Last Month Sales</span>
                </div>
              </div>
              <div>
                <table className="my-2 w-100 border">
                  <thead className="bg-warning text-light text-center">
                    <tr>
                      <th>Status</th>
                      <th>Today</th>
                      <th>This Month</th>
                      <th>Last Month</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center border-bottom">
                      <td>
                        <div className="text-center ">
                          <CIcon icon={cilCheck} className="me-2 text-success " />
                        </div>
                        <div className="text-center  ">
                          <span className="h6">success</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                    </tr>
                    <tr className="text-center border-bottom">
                      <td>
                        <div className="text-center">
                          <CIcon icon={cilReload} className="me-2 text-danger" />
                        </div>
                        <div className="text-center">
                          <span className="h6">Pending</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>
                        {' '}
                        <div className="text-center ">
                          <CIcon icon={cilXCircle} className="me-2 text-danger" />
                        </div>
                        <div className="text-center">
                          <span className="h6">Failed</span>
                        </div>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                      <td className="align-middle">
                        <span>0</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Col>
        </Row>
        {/* 2 */}
        {/* <Col md={3} xs={12} className="shadow p-3 mb-5 bg-white rounded m-2">
          <div className=" h5 fw-bold p-2  text-center rounded">
            <table className='w-100 border'>
              <tr className='bg-info text-light'>
                <td>
                  <h6>Timing - 10 AM to 7 PM</h6>
                </td>
              </tr>
              <tr>
                <td><h6>Call Us:</h6>
                <h6>044-45270126</h6>
                <h6>Email Us:</h6>
                <h6>xyz@gmail.com</h6></td>
               
              </tr>
            </table>
          </div>
        </Col> */}
      </div>
    </>
  )
}

export default Dashboard
