import { ErrorBoundary } from 'react-error-boundary';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import App from './App';
import { NotFound } from './components/NotFound/NotFound';
import { store } from './store';
import { GlobalStyle } from './commonStyles/style';

export const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <ErrorBoundary FallbackComponent={() => <div>Error</div>}>
      <React.StrictMode>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <App />
            </Route>
            <Route path="/film/:id">
              <App isShowDetails />
            </Route>
            <Route path="/search/:query">
              <App />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </React.StrictMode>
    </ErrorBoundary>
  </Provider>,
  rootElement,
);
