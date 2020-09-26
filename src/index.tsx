import { ErrorBoundary } from 'react-error-boundary';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import App from './App';
import { store } from './store';

export const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary FallbackComponent={() => <div>Error</div>}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ErrorBoundary>
  </Provider>,
  rootElement
);
