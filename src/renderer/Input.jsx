import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'

class InputPresenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        this.setState({value: ''});
        this.props.handleSubmit(this.state.value);
        event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Add" />
        </form>
      );
    }
}

const Input = connect(null, dispatch => ({
    handleSubmit: message => dispatch({type: 'ADD', message})
}))(InputPresenter);


export default Input