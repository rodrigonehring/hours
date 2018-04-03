import React from 'react'
import styled from 'styled-components'
import parseTime from '../utils/parseTime'

const Input = styled.input`
  padding: 10px;
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
    this.setState({
      value: parseTime(currentValue),
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
    

    // if (isNumber || isSeparator) {
    //   // se for maior que o máximo não faz nada!
    //   // if (index === 5) {
    //   //   console.warn('cancelado, max')
    //   //   event.preventDefault()
    //   //   return
    //   // }

    //   // é número
    //   if (isNumber) {
    //     console.warn('number')
    //     return
    //   }

    //   // // é separator e não existe ainda
    //   // if (isSeparator && !haveSeparator && index !== 0) {
    //   //   console.warn('separator', currentValue)
    //   //   this.setState({ value: `${currentValue}:` })
    //   //   // return
    //   // }
    // }
    // event.preventDefault()
  }

  render() {
    const { value } = this.state

    return (
      <Input
        type="text"
        value={value}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
        onBlur={this.handleBlur}
      />
    )
  }
}
