const triggerEvent = require('../../triggerEvent')

module.exports = el => ({
  triggerClick: () => {
    const btn = el.querySelector('button')
    triggerEvent(btn, 'click')
  }
})
