import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App.jsx'

const helloAppReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD': 
      return [...state, action.message];
  }
}

let store = createStore(helloAppReducer)

const render = () => ReactDOM.render(  
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);

render()

if (module.hot) {
  module.hot.accept();
}