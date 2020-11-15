const sum = require('./sum')
const { test, expect } = require('@jest/globals')

test('Properly adds 2 numbers', ()=> {
    expect(sum(1,2)).toBe(3)
})