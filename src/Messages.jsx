import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'

const MessagesPresenter = ({messages}) => (<ul>
    {(messages || []).map((message, index) => <li key={index}>{message}</li>)}
</ul>)

const Messages = connect(state => ({messages: state}))(MessagesPresenter)

export default Messages