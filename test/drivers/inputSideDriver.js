const byDataHook = require('../byDataHook')
const textInputDriverCreator = require('./textInputDriver')

module.exports = el => ({
  setFirstName: value => textInputDriverCreator(byDataHook(el, 'first-name')).setValue(value),
  setLastName: value => textInputDriverCreator(byDataHook(el, 'last-name')).setValue(value),
  setTitle: value => textInputDriverCreator(byDataHook(el, 'title')).setValue(value)
})
