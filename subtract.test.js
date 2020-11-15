const subtract = require('./subtract')
const { test, expect } = require('@jest/globals')

test('properly subtracts 2 values', () =>{
expect(subtract(5,2)).toBe(3)

})