'use strict'

const test = require('tape')

const timer = require('./lib')

test('exports fn', (t) => {
  t.equals(typeof timer, 'function')
  t.end()
})

test('timer returns fn', (t) => {
  t.equals(typeof timer(), 'function')
  t.end()
})

test('no suffix returns number', (t) => {
  t.equals(isNaN(Number(timer()())), false)
  t.end()
})

;['ms', 's', 'm', 'h'].forEach((unit) => {
  test(`${unit} returns "${unit}" suffix`, (t) => {
    const res = timer(unit, true)()
    t.equals(res.indexOf(unit) !== -1, true)
    t.end()
  })
})

test('counts ok', (t) => {
  const start = Date.now()
  const tim = timer('m', true)
  setTimeout(() => {
    const actual = tim()
    const end = Date.now()
    const expected = end - start
    t.equals(actual >= expected, true)
    t.end()
  }, 30000)
})
