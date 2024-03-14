import React, { Component, Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const lazyRetry = (componentImport) =>
  new Promise((resolve, reject) => {
    const storageKey = `retry-lazy-refreshed${btoa(componentImport.toString())}`;
    const hasRefreshed = JSON.parse(window.sessionStorage.getItem(storageKey) || 'false');
    componentImport()
      .then((component) => {
        window.sessionStorage.setItem(storageKey, 'false');
        if (component === undefined) {
          window.sessionStorage.setItem(storageKey, 'true');
          return window.location.reload(); // refresh the page
        }
        resolve(component);
      })
      .catch((error) => {
        if (!hasRefreshed) {
          // not been refreshed yet
          window.sessionStorage.setItem(storageKey, 'true');
          window.location.reload();
        }
        reject(error); // Default error behaviour as already tried refresh
      });
  });

// Containers
const DefaultLayout = React.lazy(() => lazyRetry(()=> import('./layout/DefaultLayout')))
// Pages
const Login = React.lazy(() =>lazyRetry(() => import('./views/pages/login/Login')))
const Register = React.lazy(() => lazyRetry (()=> import('./views/pages/register/Register')))
const Page404 = React.lazy(() => lazyRetry (()=> import('./views/pages/page404/Page404')))
const Page500 = React.lazy(() => lazyRetry (()=>mport('./views/pages/page500/Page500')))



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
