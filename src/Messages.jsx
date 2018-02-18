import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'

const MessagesPresenter = ({messages}) => (<ol>
    {(messages || []).map((message, index) => <li key={index}>{message}</li>)}
</ol>)

const Messages = connect(state => ({messages: state}))(MessagesPresenter)

export default Messages