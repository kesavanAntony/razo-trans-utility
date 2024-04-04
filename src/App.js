import React, { Component, Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DefaultLayout } from './layout';
import Register from './views/pages/register/Register';
import Page404 from './views/pages/page404/Page404';
import Page500 from './views/pages/page500/Page500';
import Login from './views/pages/login/Login';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)



// Containers
// const DefaultLayout = React.lazy(() => lazyRetry(()=> import('./layout/DefaultLayout')))
// Pages
// const Login = React.lazy(() =>lazyRetry(() => import('./views/pages/login/Login')))
// const Register = React.lazy(() => lazyRetry (()=> import('./views/pages/register/Register')))
// const Page404 = React.lazy(() => lazyRetry (()=> import('./views/pages/page404/Page404')))
// const Page500 = React.lazy(() => lazyRetry (()=>mport('./views/pages/page500/Page500')))



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="/*" name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
