import React, { Component } from 'react'
import PropTypes from 'prop-types'

const getCurrentPath = () => {
  const path = document.location.pathname
  return path.substring(path.lastIndexOf('/'))
}

export class Router extends Component {
  getChildContext() {
    return {
      handleClick: this.handleClick,
      route: this.state.route
    }
  }

  state = {
    route: getCurrentPath()
  }

  handleClick = (route) => {
    this.setState({route})
    history.pushState(null, '', route) // eslint-disable-line
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

Router.childContextTypes = {
  handleClick: PropTypes.func,
  route: PropTypes.string
}
