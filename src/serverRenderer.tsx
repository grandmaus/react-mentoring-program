import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { store } from './store';

const renderHTML = (html: string, preloadedState: any) => {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>Netflix</title>
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/js/main.bundle.js"></script>
        </body>
      </html>
  `;
};

const serverRenderer = () => {
  return (req: any, res: any) => {
    const renderRoot = () => (
      <Provider store={store}>
        <StaticRouter>
          <App />
        </StaticRouter>
      </Provider>
    );
    renderToString(renderRoot());

    const htmlString = renderToString(renderRoot());
    const preloadedState = store.getState();

    res.send(renderHTML(htmlString, preloadedState));
  };
};

export default serverRenderer;
