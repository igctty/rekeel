import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Button from '~/l1_atoms/button'

const Div = styled.div`
    text-align: right;
`

const TwoButton = ({config, ...props}) =>
  <Div {...props}>
    <Button
      id          = {config[0].id}
      name        = {config[0].name}
      label       = {config[0].label}
      btnStyle    = "normal"
      handleClick = {config[0].handleClick}
    />
    <Button
      id          = {config[1].id}
      name        = {config[1].name}
      label       = {config[1].label}
      btnStyle    = "primary"
      handleClick = {config[1].handleClick}
    />
  </Div>

TwoButton.propTypes = {
  config:         PropTypes.arrayOf(PropTypes.shape({
    id:           PropTypes.string.isRequired,
    name:         PropTypes.string.isRequired,
    label:        PropTypes.string.isRequired,
    handleClick:  PropTypes.func.isRequired
  }))
}

export default TwoButton
