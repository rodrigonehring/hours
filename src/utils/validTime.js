export default function validTime(value) {
  if (!value || value.length !== 5) {
    return false
  }

  return /^((?:[01]\d|2[0-3]):[0-5]\d$)/.test(value)
}
