import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';
import Root from './root';

const store = configureStore();

const render = (RootComponent) => {
  ReactDOM.render(<RootComponent store={store} />, document.getElementById('root'));
};

registerServiceWorker();

render(Root);

if (module.hot) {
  module.hot.accept('./root.js', () => {
    const NextRoot = require('./root.js').default;
    setTimeout(
      () => {
        render(NextRoot);
      },
      0
    );
  });
}
