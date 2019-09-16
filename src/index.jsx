/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import { css, Global, jsx } from '@emotion/core';

import Home from 'pages/Home';
import { GlobalStyles } from 'ui/theme';

const App = () => (
  <>
    <main>
      <Home />
    </main>
    <Global styles={ css(GlobalStyles) } />
  </>
);

ReactDOM.render((<App />),
  document.getElementById('root')
  || document.createElement('div')); // for testing purposes

export default App;
