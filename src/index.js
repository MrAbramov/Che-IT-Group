import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'

import store from './app/store'
import { Main } from './pages/Main';

// import './assets/css/index.css';
import '@elastic/eui/dist/eui_theme_light.css';

import { EuiProvider } from '@elastic/eui';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <EuiProvider colorMode="light">
        <Main />
      </EuiProvider>
    </Provider>
  </React.StrictMode>
);
