export default function parseTime(value) {
  const idxSeparator = value.indexOf(':') 
  const l = value.length

  if (idxSeparator !== -1) {
    if (l === 5) {
      return value
    } else if (l === 2) {
      if (idxSeparator === 0) {
        return `00:0${value.slice(1, 2)}`
      }
      return `0${value.slice(0, 1)}:00`
    } else if (l === 3) {
      if (idxSeparator === 0) {
        return `00:${value.slice(1, 3)}`
      }
      if (idxSeparator === 1) {
        return `0${value.slice(0, 1)}:0${value.slice(2, 3)}`
      }
      return `${value.slice(0,2)}:00`
    } else if (l === 4) {
      if (idxSeparator === 0) {
        return value
      }
      if (idxSeparator === 1) {
        return `0${value.slice(0,1)}:${value.slice(2,4)}`
      }
      if (idxSeparator === 2) {
        return `${value.slice(0,2)}:0${value.slice(3,4)}`
      }
      return `${value.slice(0,2)}:${value.slice(2,4)}`
    }
  } else if (l === 1) {
    return `0${value}:00`
  } else if (l === 2) {
    return `${value}:00`
  } else if (l === 3) {
    return `${value.slice(0,2)}:0${value.slice(2,3)}`
  } else if (l === 4) {
    return `${value.slice(0,2)}:${value.slice(2,4)}`
  }

  return value
}
