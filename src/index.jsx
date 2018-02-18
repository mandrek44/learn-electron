import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'

import Root from './Root.jsx'

const render = () => ReactDOM.render(
  <AppContainer>
    <Root />
  </AppContainer>,
  document.getElementById('root')
);

render()

if (module.hot) {
  module.hot.accept();
}