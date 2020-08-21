import { ErrorBoundary } from 'react-error-boundary';
import React from 'react';
import ReactDOM from 'react-dom';

import App from 'App';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <ErrorBoundary>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ErrorBoundary>,
  rootElement
);
