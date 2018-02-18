import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'

import Input from './Input.jsx'
import Messages from './Messages.jsx'

const App = () => (<div>
        <h1>Hello world</h1>
        <Messages />
        <Input />
    </div>);

export default App