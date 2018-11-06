const byDataHook = require('../byDataHook')
const textInputDriverCreator = require('./elementsDriver/textInputDriver')
const checkboxDriver = require('./elementsDriver/checkboxDriver')
const btnClickDriver = require('./elementsDriver/btnClickDriver')

module.exports = el => ({
  setFirstName: value => textInputDriverCreator(byDataHook(el, 'first-name-input')).setValue(value),
  setLastName: value => textInputDriverCreator(byDataHook(el, 'last-name-input')).setValue(value),
  setTitle: value => textInputDriverCreator(byDataHook(el, 'title-input')).setValue(value),
  setTelephone: value => textInputDriverCreator(byDataHook(el, 'telephone-input')).setValue(value),
  setEmail: value => textInputDriverCreator(byDataHook(el, 'email-input')).setValue(value),
  showBackgroundHandlerContainer: () => checkboxDriver(el, 'frontVisilibility-checkbox').toggle(),
})
