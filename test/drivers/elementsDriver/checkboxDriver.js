const triggerEvent = require('../../triggerEvent')

module.exports = el => ({
  setValue: value => {
    const input = el.querySelector('input')
    input.checked = value
    triggerEvent(input, 'change')
  }
})
