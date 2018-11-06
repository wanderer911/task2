const triggerEvent = require('../../triggerEvent')

module.exports = el => ({
  toggle: () => {
    const checkbox = el.querySelector('input[type=checkbox]')
    checkbox.checked = !checkbox.checked;
    // checkbox.value = value?'on':'off';
    // console.log(checkbox.outerHTML,checkbox.value)
    // checkbox.value = 'off'
    triggerEvent(checkbox, 'click')
  }
})
