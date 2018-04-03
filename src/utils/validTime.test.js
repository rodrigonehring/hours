import validTime from './validTime'

it('validTime', () => {
  expect(validTime('01:01')).toBe(true)
  expect(validTime('1:01')).toBe(false)
  expect(validTime('31:01')).toBe(false)
  expect(validTime('21:01')).toBe(true)
  expect(validTime('21:59')).toBe(true)
  expect(validTime('21:60')).toBe(false)
  expect(validTime('21:00')).toBe(true)
  expect(validTime('59:00')).toBe(false)
  expect(validTime('33')).toBe(false)
})
