import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App/index';
import './index.scss';

// const root = createRoot(document.getElementById('root'));
// root.render(<App/>);



const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab='home' />);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './routes/App';
// import './assets/App.scss';

// ReactDOM.render( 
//     <App />, 
//     document.getElementById('root') 
// );


import _ from 'lodash';
// import printMe from './print.js';

if ('serviceWorker' in navigator) {
 window.addEventListener('load', () => {
   navigator.serviceWorker.register('/service-worker.js').then(registration => {
     console.log('SW registered: ', registration);
   }).catch(registrationError => {
     console.log('SW registration failed: ', registrationError);
   });
 });
}