const triggerEvent = require('../../triggerEvent')

module.exports = el => ({
  triggerClick: () => {
    triggerEvent(el, 'click')
  }
})
