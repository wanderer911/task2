const triggerEvent = require('../triggerEvent')

module.exports = el => ({
  setValue: value => {
    const input = el.querySelector('input')
    input.value = value
    triggerEvent(input, 'input')
  }
})
