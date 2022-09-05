import React from 'react';
import ReactDOM from 'react-dom/client';
import {store} from './redux/initialStore';
import { Provider } from 'react-redux';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
        <React.StrictMode>
          <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);