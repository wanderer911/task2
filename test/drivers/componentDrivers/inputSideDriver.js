const byDataHook = require('../../byDataHook')
const textInputDriverCreator = require('../elementsDriver/textInputDriver')
const checkBoxDriverCreator = require('../elementsDriver/checkboxDriver')

module.exports = el => ({
    setFirstName: value => textInputDriverCreator(byDataHook(el, 'first-name-input')).setValue(value),
    setLastName: value => textInputDriverCreator(byDataHook(el, 'last-name-input')).setValue(value),
    setTitle: value => textInputDriverCreator(byDataHook(el, 'title-input')).setValue(value),
    setTelephone: value => textInputDriverCreator(byDataHook(el, 'telephone-input')).setValue(value),
    setEmail: value => textInputDriverCreator(byDataHook(el, 'email-input')).setValue(value),
    toggleFrontSideBackground: () => checkBoxDriverCreator(byDataHook(el, 'frontVisilibility-checkbox').toggle()),
}) 