import React from 'react';
import { createRoot } from 'react-dom/client';
import _ from 'lodash';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app'
import { Auth0ProviderWithNavigate } from './Auth0ProviderWithNavigate';
import './index.scss';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Auth0ProviderWithNavigate>
      <App/>
    </Auth0ProviderWithNavigate>
  </BrowserRouter>
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