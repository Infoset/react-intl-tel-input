/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class RootModal extends Component {
  constructor(props) {
    super(props)

    this.modalTarget = props.document.createElement('div')
    this.modalTarget.className = 'intl-tel-input iti-container'
  }

  componentDidMount() {
    this.props.document.body.appendChild(this.modalTarget)
  }

  componentWillUnmount() {
    this.props.document.body.removeChild(this.modalTarget)
  }

  render() {
    return ReactDOM.createPortal(<>{this.props.children}</>, this.modalTarget)
  }
}

RootModal.propTypes = {
  children: PropTypes.node,
}
