import {BigNumber, FixedNumber} from 'ethers'
import {formatBigNumber, formatBigNumberToFixed, formatFixedNumber} from 'utils/formatBalance'

describe('formatBigNumber', () => {
  it.each([
    ['13853728395577367836', 4, 18, '13.8537'],
    ['13853728395577367836', 18, 18, '13.853728395577367836'],
    ['13853728395577367836', 17, 18, '13.85372839557736783'],
    ['13853728395577367836', 16, 18, '13.8537283955773678'],
    ['13853728395577367836', 15, 18, '13.853728395577367'],
    ['13853728395577367836', 14, 18, '13.85372839557736'],
    ['13853728395577367836', 13, 18, '13.8537283955773'],
    ['13853728395577367836', 12, 18, '13.853728395577'],
    ['13853728395577367836', 11, 18, '13.85372839557'],
    ['13853728395577367836', 10, 18, '13.8537283955'],
    ['13853728395577367836', 9, 18, '13.853728395'],
    ['13853728395577367836', 8, 18, '13.85372839'],
    ['13853728395577367836', 7, 18, '13.8537283'],
    ['13853728395577367836', 6, 18, '13.853728'],
    ['13853728395577367836', 5, 18, '13.85372'],
    ['13853728395577367836', 4, 18, '13.8537'],
    ['13853728395577367836', 3, 18, '13.853'],
    ['13853728395577367836', 2, 18, '13.85'],
    ['13853728395577367836', 1, 18, '13.8'],
    ['13853728395577367836', 0, 18, '13.0'],
    ['2652487215692514844', 2, 18, '2.65'],
    ['1120124117988485', 3, 18, '0.001'],
    ['1120124117988485', 1, 18, '0.0'],
    ['207655447689', 2, 9, '207.65'],
    ['6652397734197674016', 8, 18, '6.65239773'],
    ['23810432295393761', 18, 18, '0.023810432295393761'],
    ['23810432295393761', 9, 18, '0.023810432'],
    ['23810432295393761', 1, 18, '0.0'],
    ['1000000000000000000', 1, 18, '1.0'],
    ['0', 1, 18, '0.0'],
    ['0', 2, 18, '0.0'],
  ])('correctly formats %s (%d, %d) correctly to %s', (value, displayDecimals, decimals, expected) => {
    const ethersBn = BigNumber.from(value)
    expect(formatBigNumber(ethersBn, displayDecimals, decimals)).toBe(expected)
  })
})

describe('formatBigNumberToFixed', () => {
  it.each([
    ['1000000000000000000', 2, 18, '1.00'],
    ['1000000000000000000', 6, 18, '1.000000'],
    ['1200000000000000000', 3, 18, '1.200'],
    ['1020100000000000000', 6, 18, '1.020100'],
    ['1000000000000000000', 0, 18, '1'],
  ])('correctly formats %s (%d, %d) correctly to %s', (value, displayDecimals, decimals, expected) => {
    const ethersBn = BigNumber.from(value)
    expect(formatBigNumberToFixed(ethersBn, displayDecimals, decimals)).toBe(expected)
  })
})

describe('formatFixedNumber', () => {
  it.each([
    ['9763410526137450427.1196', 3, 18, '9.763'],
    ['9763410526137450427.1196', 1, 18, '9.7'],
    ['9763410526137450427.1196', 0, 18, '9.0'],
    ['567008695201201503619.22', 18, 18, '567.008695201201503619'],
    ['567008695201201503619.22', 5, 18, '567.00869'],
    ['97634105261.1196', 3, 9, '97.634'],
    ['97634105261', 1, 9, '97.6'],
    ['97634105261', 0, 9, '97.0'],
  ])('correctly formats %s (%d, %d) correctly to %s', (value, displayDecimals, decimals, expected) => {
    const ethersFn = FixedNumber.from(value)
    expect(formatFixedNumber(ethersFn, displayDecimals, decimals)).toBe(expected)
  })
})
