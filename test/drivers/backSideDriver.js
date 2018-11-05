const byDataHook = require('../byDataHook')
const textInputDriverCreator = require('./elementsDriver/textInputDriver')
const checkboxDriver = require('./elementsDriver/checkboxDriver')

module.exports = el => ({
  setCompanyName: value => textInputDriverCreator(byDataHook(el, 'companyName-input')).setValue(value),
  showBackgroundHandlerContainer: value => checkboxDriver(el, 'frontVisilibility-checkbox').setValue(value)
})
