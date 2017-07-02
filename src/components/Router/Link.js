import React, {Component} from 'react'
import { Button } from 'reactstrap'

export class Link extends Component {
  handleClick = (evt) => {
      evt.preventDefault()
      history.pushState(null, '', this.props.to) // eslint-disable-line
  }

  render() {
    return ( <Button onClick={this.handleClick} className="btn-link">{this.props.children}</Button> )
  }
}

Link.Proptypes = {
    to: React.PropTypes.string.isRequired,
    children: React.PropTypes.node
}
