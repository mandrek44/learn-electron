import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App.jsx'
import helloAppReducer from './reducers'

let store = createStore(helloAppReducer)

const render = (RootElement) => ReactDOM.render(  
  <AppContainer>
    <Provider store={store}>
      <RootElement />
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);

render(App)

if (module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers').default);
    console.log("Replaced reducers");
  })
  module.hot.accept('./App.jsx', () => {
    render(require('./App.jsx').default);
    console.log("Replaced App.jsx");
  });
}