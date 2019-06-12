import React from 'react'
import PropTypes from 'prop-types'

const HelloWorld = ({ name }) => <h1>Hello, {name || 'World'}</h1>

HelloWorld.propTypes = {
  /** You can (but don't have to) provide a name. If provided, you'll be
   * greeted by name.
   */
  name: PropTypes.string
}

export default HelloWorld
