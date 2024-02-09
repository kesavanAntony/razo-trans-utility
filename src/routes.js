import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Mobile = React.lazy(() => import('./views/base/mobile/Mobile'))
const Dth = React.lazy(() => import('./views/base/dth/Dth'))
const Pancard = React.lazy(() => import('./views/base/pancard/Pancard'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const MDMT = React.lazy(() => import('./views/forms/mdmt/MDMT'))
const Cashfree = React.lazy(() => import('./views/forms/cashfree/Cashfree'))
const Runpaisa = React.lazy(() => import('./views/forms/runpaisa/Runpaisa'))
const Easebuzz = React.lazy(() => import('./views/forms/easebuzz/Easebuzz'))
const Cashfree2 = React.lazy(() => import('./views/forms/cashfree2/Cashfree2'))
const Raeps = React.lazy(() => import('./views/forms/rAeps/Raeps'))
const PDMT = React.lazy(() => import('./views/forms/pdmt/PDMT'))
const Bulkpayout = React.lazy(() => import('./views/forms/bulkpayout/Bulkpayout'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const LoadWallet = React.lazy(() => import('./views/icons/loadWallet/LoadWallet'))
const EaseBuzz = React.lazy(() => import('./views/icons/easeBuzz/Easebuzz'))
const CashfreePG = React.lazy(() => import('./views/icons/cashfreePG/CashfreePG'))
const CashfreePG2 = React.lazy(() => import('./views/icons/cashfreePG2/CashfreePG2'))
const RunpaisaPG = React.lazy(() => import('./views/icons/runpaisaPG/RunpaisaPG'))
const RequestReport = React.lazy(() => import('./views/icons/requestReport/RequestReport'))
const AllFundReport = React.lazy(() => import('./views/icons/allFundReport/AllFundReport'))

// Notifications
const RequestReportAeps = React.lazy(() => import('./views/notifications/requestReportAeps/RequestReportAeps'))
const Pending = React.lazy(() => import('./views/notifications/pending/Pending'))
const Request = React.lazy(() => import('./views/notifications/request/Request'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

// transaction
const AepsStatement = React.lazy(()=> import ('./views/transaction/aepsStatement/AepsStatement'))
const BillpayStatement = React.lazy(()=> import ('./views/transaction/billpayStatement/BillpayStatement'))
const MatmStatement = React.lazy(()=> import ('./views/transaction/matm/MatmStatement'))
const MoneyStatement = React.lazy(()=> import ('./views/transaction/moneyStatement/MoneyStatement'))
const PayoutStatement = React.lazy(()=> import ('./views/transaction/payoutStatement/PayoutStatement'))
const RechargeStatement = React.lazy(()=> import ('./views/transaction/rechargeStatement/RechargeStatement'))
const UtiStatement = React.lazy(()=> import ('./views/transaction/utiStatement/UtiStatement'))
const PgStatement = React.lazy(()=> import ('./views/transaction/pgStatement/PgStatement'))
// Account
const MainWallet = React.lazy(() => import('./views/account/mainWallet/MainWallet'))
const AepsWallet = React.lazy(() => import('./views/account/aepsWallet/AepsWallet'))
// support Ticket
const PendingTicket = React.lazy(() => import('./views/supportTicket/pendingTicket/PendingTicket'))
const ResolvedTicket = React.lazy(() => import('./views/supportTicket/resolvedTicket/ResolvedTicket'))
// account setting
const ProfileSetting = React.lazy(()=> import ('./views/accountSetting/profileSettting/ProfileSetting'))
const Certificate = React.lazy(()=> import ('./views/accountSetting/certificate/Certificate'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  // { path: '/base', name: 'Base', element: Pancard, exact: true },
  { path: '/base/mobile', name: 'Mobile', element: Mobile },
  { path: '/base/dth', name: 'Dth', element: Dth },
  { path: '/base/pancard', name: 'Pancard', element: Pancard },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  // { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/runpaisa', name: 'Runpaisa-Payout', element: Runpaisa },
  { path: '/forms/mdmt', name: 'MDMT', element: MDMT },
  { path: '/forms/pdmt', name: 'PDMT', element: PDMT },
  { path: '/forms/rAeps', name: 'R-Aeps', element: Raeps },
  { path: '/forms/easebuzz', name: 'Easebuzz Payout', element: Easebuzz },
  { path: '/forms/cashfree', name: 'Cashfree Payout', element: Cashfree },
  { path: '/forms/cashfree2', name: 'Cashfree 2-Payout', element: Cashfree2 },
  { path: '/forms/bulkpayout', name: 'Bulkpayout-Payout', element: Bulkpayout },
  // { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/loadWallet', name: 'Load Wallet', element: LoadWallet },
  { path: '/icons/easebuzz', name: 'Easebuzz PG', element: EaseBuzz },
  { path: '/icons/cashfreePG', name: 'Cashfree PG', element: CashfreePG},
  { path: '/icons/cashfreePG2', name: 'Cashfree PG 2', element: CashfreePG2},
  { path: '/icons/runpaisaPG', name: 'Runpaisa PG', element: RunpaisaPG},
  { path: '/icons/requestReport', name: 'Request Report', element: RequestReport},
  { path: '/icons/allFundReport', name: 'All Fund Report', element: AllFundReport },
  { path: '/notifications', name: 'Notifications', element: Request, exact: true },
  { path: '/notifications/request', name: 'Request', element: Request },
  { path: '/notifications/pending', name: 'Pending', element: Pending },
  { path: '/notifications/requestReportAeps', name: 'Request Report', element: RequestReportAeps },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
  // transaction
  { path: '/transaction/aepsStatement', name: 'Aeps Statement', element: AepsStatement },
  { path: '/transaction/billpayStatement', name: 'Bill Pay Statement', element: BillpayStatement },
  { path: '/transaction/matmStatement', name: 'Matm Statement', element: MatmStatement },
  { path: '/transaction/moneyStatement', name: 'Money Transfer Statement', element: MoneyStatement },
  { path: '/transaction/payoutStatement', name: 'Payout Statement', element: PayoutStatement },
  { path: '/transaction/rechargeStatement', name: 'Recharge Statement', element: RechargeStatement },
  { path: '/transaction/utiStatement', name: 'Uti Pancard Statement', element: UtiStatement },
  { path: '/transaction/pgStatement', name: 'PG Statement', element: PgStatement },
  // account
  { path: '/account/mainWallet', name: 'Main Wallet', element: MainWallet },
  { path: '/account/aepsWallet', name: 'Aeps Wallet', element: AepsWallet },
  // support Ticket
  { path: '/supportTicket/pendingTicket', name: 'Pending', element: PendingTicket },
  { path: '/supportTicket/resolvedTicket', name: 'Resolved', element: ResolvedTicket },
  // account Setting
  { path: '/accountSetting/profileSetting', name: 'Profile Setting', element: ProfileSetting },
  { path: '/accountSetting/certificate', name: 'Certificate', element: Certificate },
]

export default routes
