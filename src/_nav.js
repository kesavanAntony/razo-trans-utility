import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilNotes,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilFolderOpen,
  cilWallet,
  cilStream,
  cilNewspaper,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  // {
  //   component: CNavTitle,
  //   name: 'Theme',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  {
    component: CNavTitle,
    name: 'Base',
  },
  {
    component: CNavGroup,
    name: 'Utility Recharge',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Mobile',
        to: '/base/mobile',
      },
      {
        component: CNavItem,
        name: 'Dth',
        to: '/base/dth',
      },
      {
        component: CNavItem,
        name: 'FASTag',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Caple TV',
        to: '/base/carousels',
      },
      // {
      //   component: CNavItem,
      //   name: 'Collapse',
      //   to: '/base/collapses',
      // },
      // {
      //   component: CNavItem,
      //   name: 'List group',
      //   to: '/base/list-groups',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Navs & Tabs',
      //   to: '/base/navs',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Pagination',
      //   to: '/base/paginations',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Placeholders',
      //   to: '/base/placeholders',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Popovers',
      //   to: '/base/popovers',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Progress',
      //   to: '/base/progress',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Spinners',
      //   to: '/base/spinners',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Tables',
      //   to: '/base/tables',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Tooltips',
      //   to: '/base/tooltips',
      // },
    ],
  },
  {
    component: CNavGroup,
    name: 'Bill Payment',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Electricity',
        to: '/buttons/electricity',
      },
      {
        component: CNavItem,
        name: 'Postpaid',
        to: '/buttons/postpaid',
      },
      {
        component: CNavItem,
        name: 'Water',
        to: '/buttons/water',
      },
      {
        component: CNavItem,
        name: 'Boradband',
        to: '/buttons/dropdowns',
      },
      {
        component: CNavItem,
        name: 'LPG gas',
        to: '/buttons/dropdowns',
      },
      {
        component: CNavItem,
        name: 'Piped gas',
        to: '/buttons/dropdowns',
      },
      {
        component: CNavItem,
        name: 'Landline',
        to: '/buttons/dropdowns',
      },
      {
        component: CNavItem,
        name: 'Education fees',
        to: '/buttons/dropdowns',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Pancard',
    to: '/base/pancard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Banking Service',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'M-DMT-Money Transfer',
        to: '/forms/mdmt',
      },
      {
        component: CNavItem,
        name: 'P-DMT-Money Transfer',
        to: '/forms/pdmt',
      },
      {
        component: CNavItem,
        name: 'ICICI Bank Aeps',
        to: '/forms/checks-radios',
      },
      {
        component: CNavItem,
        name: 'R-Aeps',
        to: '/forms/rAeps',
      },
      {
        component: CNavItem,
        name: 'Easebuzz Payout',
        to: '/forms/easebuzz',
      },
      {
        component: CNavItem,
        name: 'Cashfree Payout',
        to: '/forms/cashfree',
      },
      {
        component: CNavItem,
        name: 'Cashfree 2-Payout',
        to: '/forms/cashfree2',
      },
      {
        component: CNavItem,
        name: 'Bulkpayout-Payout',
        to: '/forms/bulkpayout',
      },
      {
        component: CNavItem,
        name: 'Runpaisa',
        to: '/forms/runpaisa',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Service Links',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'YouTube',
        to: 'https://www.youtube.com',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Wallet Service',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Load Wallet',
        to: '/icons/loadWallet',
        // badge: {
        //   color: 'success',
        //   text: 'NEW',
        // },
      },
      {
        component: CNavItem,
        name: 'Easebuzz PG',
        to: '/icons/easeBuzz',
      },
      {
        component: CNavItem,
        name: 'Cashfree PG',
        to: '/icons/cashfreePG',
      },
      {
        component: CNavItem,
        name: 'Cashfree PG 2',
        to: '/icons/cashfreePG2',
      },
      {
        component: CNavItem,
        name: 'Runpaisa PG',
        to: '/icons/runpaisaPG',
      },
      {
        component: CNavItem,
        name: 'Request Report',
        to: '/icons/requestReport',
      },
      {
        component: CNavItem,
        name: 'All Fund Report',
        to: '/icons/allFundReport',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Aeps Settlement',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Request',
        to: '/notifications/request',
      },
      {
        component: CNavItem,
        name: 'Pending Request',
        to: '/notifications/pending',
      },
      {
        component: CNavItem,
        name: 'Request Report',
        to: '/notifications/requestReportAeps',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Transaction History',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Aeps Statement',
        to: '/transaction/aepsStatement',
      },
      {
        component: CNavItem,
        name: 'Billpay Statement',
        to: '/transaction/billpayStatement',
      },
      {
        component: CNavItem,
        name: 'Matm Statement',
        to: '/transaction/matmStatement',
      },
      {
        component: CNavItem,
        name: 'Money Transfer Statement',
        to: '/transaction/moneyStatement',
      },
      {
        component: CNavItem,
        name: 'Payout Statement',
        to: '/transaction/payoutStatement',
      },
      {
        component: CNavItem,
        name: 'Recharge Statement',
        to: '/transaction/rechargeStatement',
      },
      {
        component: CNavItem,
        name: 'Uti Pancard Statement',
        to: '/transaction/utiStatement',
      },
      {
        component: CNavItem,
        name: 'PG Statement',
        to: '/transaction/pgStatement',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Account Statement',
    icon: <CIcon icon={cilFolderOpen} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Main Wallet',
        to: '/account/mainWallet',
      },
      {
        component: CNavItem,
        name: 'Aeps Wallet',
        to: '/account/aepsWallet',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Support Tickets',
    icon: <CIcon icon={cilNewspaper} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: '0',
    },
    items: [
      {
        component: CNavItem,
        name: 'Pending',
        to: '/supportTicket/pendingTicket',
        badge: {
          color: 'info',
          text: '0',
        },
      },
      {
        component: CNavItem,
        name: 'Resolved',
        to: '/supportTicket/ResolvedTicket',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Account Setting',
    icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Profile Setting',
        to: '/accountSetting/profileSetting',
      },
      {
        component: CNavItem,
        name: 'Certificate',
        to: '/accountSetting/certificate',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Driver Links',
    icon: <CIcon icon={cilStream} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Mandra',
        to: 'https://www.mantratec.com/Download/User',
      },
      {
        component: CNavItem,
        name: 'Morpho',
        to: 'https://rdserviceonline.com/?gclid=Cj0KCQjwnrmlBhDHARIsADJ5b_l3iexRwenvTi-EWbZVIpBWGziqXJ6gQvqh85rqkz-RSC94_UYy-FoaAkMpEALw_wcB',
      },
      {
        component: CNavItem,
        name: 'Startek',
        to: 'https://drive.google.com/file/d/19FZWSM3-vMdyd-_CpggvpyBPLaTSZcZa/view',
      },
      {
        component: CNavItem,
        name: 'Tatvik TMF20',
        to: 'https://drive.google.com/file/d/1-LJfFXIvgE3ZLIm5fmYGjz95IvUnQYk4/view',
      },
    ],
  },
]

export default _nav
