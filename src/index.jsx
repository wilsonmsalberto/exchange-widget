/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';

// Pages
import Home from 'pages/Home';

// Redux
import { Provider } from 'react-redux';

// State
import store from 'state/store';

// Styles
import { css, Global, jsx } from '@emotion/core';
import { GlobalStyles } from 'ui/theme';

const App = () => (
  <>
    <main>
      <Home />
    </main>
    <Global styles={ css(GlobalStyles) } />
  </>
);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
  || document.createElement('div'), // for testing purposes
);

export default App;
