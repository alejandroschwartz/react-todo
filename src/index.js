import React from 'react';
import { createRoot } from 'react-dom/client';
import _ from 'lodash';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { App } from './pages/App/index';
import { Home } from './pages/Home'
import { ProtectedRoute } from './components/login/ProtectedRoute';
import './index.scss';

export const Auth0ProviderWithNavigate = ({ children }) => {
  const navigate = useNavigate();

  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const redirectUri =
    process.env.REACT_APP_VERCEL_ENV === "production"
      ? `https://${window.location.hostname}/callback`
      : window.location.origin;

  console.log("window", window.location);
  console.log("domain", domain, "clienId", clientId, "redirectUri", redirectUri)

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }


  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      // redirectUri={redirectUri}
      // onRedirectCallback={onRedirectCallback}
      authorizationParams={{ redirect_uri: redirectUri }}
    >
      {children}
    </Auth0Provider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Auth0ProviderWithNavigate>
      
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route element={<ProtectedRoute />} >
          <Route path='/app' element={ <App/> } />
          <Route path='*' element={ <App/> } />
        </Route>
      </Routes>

    </Auth0ProviderWithNavigate>
  </BrowserRouter>


  // <Auth0Provider
  //   domain={domain}
  //   clientId={clientId}
  //   redirectUri={redirectUri}
  //   onRedirectCallback={onRedirectCallback}
  //   // authorizationParams={{ redirect_uri: window.location.origin }}
  // >
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path='/' element={ <Home/> } />
  //       <Route element={<ProtectedRoute />} >
  //         <Route path='/app' element={ <App/> } />
  //         <Route path='*' element={ <App/> } />
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>
  // </Auth0Provider>,
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}