const triggerEvent = require('../../triggerEvent')

module.exports = el => ({
  setValue: value => {
    const checkbox = el.querySelector('input[type=checkbox]')
    checkbox.checked = value;
    checkbox.value = value?'on':'off';
    // console.log(checkbox.outerHTML,checkbox.value)
    // checkbox.value = 'off'
    triggerEvent(checkbox, 'change')
  }
})
