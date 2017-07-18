import React, { Component } from 'react'

class UserInput extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleHometownChange = (e) => {
    this.setState({
      hometown: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault() 
    this.props.store.dispatch({type: 'ADD_USER', user: {hometown: this.state.hometown, username: this.state.username} })
    this.setState({
      username: '',
      hometown: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input type='text' value={this.state.username} onChange={this.handleUsernameChange} />
          <label>Hometown:</label>
          <input type='text' value={this.state.hometown} onChange={this.handleHometownChange} />
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default UserInput
