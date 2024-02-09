import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMenu, cilWallet } from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none">
          <img src={require('../assets/images/rtu.png')} height={45} alt="" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto justify-content-end">
          <CNavItem>
            <CNavLink className="fw-bold">
              <CIcon icon={cilWallet} size="lg" />
              <span className="px-1"> Main Wallet : 62416.8 /-</span>
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink className="fw-bold">
              <CIcon icon={cilWallet} size="lg" />
              <span className="px-1"> Aeps Wallet : 7572.2 /-</span>
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink className="fw-bold">
              <CIcon icon={cilWallet} size="lg" />
              <span className="px-1"> Matm Wallet : 42145.2 /-</span>
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          {/* <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilWallet} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilWallet} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem> */}
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
