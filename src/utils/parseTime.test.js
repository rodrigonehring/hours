import parseTime from './parseTime'

it('1 = 01:00', () => {
  expect(parseTime('1')).toBe('01:00')
})

it('12 = 12:00', () => {
  expect(parseTime('12')).toBe('12:00')
})

it('1215 = 12:15', () => {
  expect(parseTime('1215')).toBe('12:15')
})

it('121 = 12:01', () => {
  expect(parseTime('121')).toBe('12:01')
})

it('321 = 32:01', () => {
  expect(parseTime('321')).toBe('32:01')
})

it('1111 = 11:11', () => {
  expect(parseTime('1111')).toBe('11:11')
})

it('12:30 = 12:30', () => {
  expect(parseTime('12:30')).toBe('12:30')
})

it('1: = 01:00', () => {
  expect(parseTime('1:')).toBe('01:00')
})

it(':1 = 00:01', () => {
  expect(parseTime(':1')).toBe('00:01')
})

it(':10 = 00:10', () => {
  expect(parseTime(':10')).toBe('00:10')
})

it('11: = 11:00', () => {
  expect(parseTime('11:')).toBe('11:00')
})

it('1:1 = 01:01', () => {
  expect(parseTime('1:1')).toBe('01:01')
})

it('1:11 = 01:11', () => {
  expect(parseTime('1:11')).toBe('01:11')
})

it('11:1 = 11:01', () => {
  expect(parseTime('11:1')).toBe('11:01')
})

it('11:11 = 11:11', () => {
  expect(parseTime('11:11')).toBe('11:11')
})

it('99:999 = 99:999', () => {
  expect(parseTime('99:999')).toBe('99:999')
})