import React from 'react'
import styled from 'styled-components'
import parseTime from '../utils/parseTime'
import validTime from '../utils/validTime'

const Input = styled.input`
  padding: 10px;
  ${props => !props.valid && 'color: red'}
`
/**
 * 1 = 01:00
 * 12 = 12:00
 * 1215 = 12:15
 * 1111 = 11:11
 * 12:30 = 12:30
 * 1:15 = 01:15
 * 9:15 = 09:15
 * 1:1 = 01:01
 * 1:10 = 01:01
 */

const separators = [':', ',', '.', ';']
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

export default class InputTime extends React.Component {
  state = {
    value: this.props.value || '',
    valid: true,
  }

  handleChange = e => {
    const { value } = e.target
    let newValue = value
    separators.forEach(i => {
      newValue = newValue.replace(i, ':')
    })
    this.setState({ value: newValue })
  }

  handleBlur = () => {
    const currentValue = this.state.value
    const value = parseTime(currentValue)
    const valid = validTime(value)
    this.setState({
      value,
      valid,
    })
  }

  handleKeyPress = event => {
    const currentValue = this.state.value
    const { key } = event
    const index = currentValue.length
    const isNumber = numbers.includes(key)
    const isSeparator = separators.includes(key)
    const haveSeparator = currentValue.includes(':')

    console.info(
      `key: ${key}, index: ${index}, isNumber: ${isNumber}, isSeparator: ${isSeparator}, haveSeparator: ${haveSeparator}`,
    )

    if (!isNumber && !isSeparator) {
      event.preventDefault()
      return
    }
  }

  render() {
    const { value, valid } = this.state

    return (
      <Input
        valid={valid}
        type="text"
        value={value}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
        onBlur={this.handleBlur}
      />
    )
  }
}
