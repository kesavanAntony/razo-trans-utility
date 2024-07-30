import React from 'react'
import { CFooter } from '@coreui/react'

const Footer = () => {
  return (

     <CFooter className='bg-dark text-light'>
      <div className='col-md-6'>
        <a href="https://razo.co.in" target="_blank" rel="noopener noreferrer" className='text-white'>
          Razo Trans Utility Pvt Ltd
        </a>
        <span className="ms-1">Ⓒ Copy rights reserved </span>
      </div>
      <div className="text-end col-md-6">
        <span className="me-1">Designed by</span>
        <a href="https://optimista.in" target="_blank" rel="noopener noreferrer" className='text-white'>
          Optimista
        </a>
      </div>
    </CFooter>
  )
}

export default Footer
