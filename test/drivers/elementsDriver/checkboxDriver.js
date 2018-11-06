const triggerEvent = require('../../triggerEvent')

module.exports = el => ({
  toggle: () => {
    const checkbox = el.querySelector('input[type=checkbox]')
    checkbox.checked = !checkbox.checked;
    triggerEvent(checkbox, 'click')
  }
})
