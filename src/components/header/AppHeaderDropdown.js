import React,{useState} from 'react'
import {
  CAvatar,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import { cilCreditCard, cilSettings, cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react';

import avatar8 from './../../assets/images/avatars/dummy.png'

const AppHeaderDropdown = () => {


  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
         <CDropdownItem href="#" >
          <CIcon icon={cilSettings} className="me-2" />
          Login
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilCreditCard} className="me-2" />
          Logout
        </CDropdownItem>
      
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
