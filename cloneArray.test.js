const cloneArray = require('./cloneArray')
const { test, expect } = require('@jest/globals')

test('Properly clones Array', () => {
    const array=[1,2,3]
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array)
})