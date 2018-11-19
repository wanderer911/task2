const triggerEvent = require('../../triggerEvent')

module.exports = el => ({
  setColor: value => {
    const input = el.querySelector('input')
    input.value = value
    triggerEvent(input, 'input')
  }
})
