const byDataHook = require('../../byDataHook')
const textInputDriverCreator = require('../elementsDriver/textInputDriver')

module.exports = el => ({
    setCompanyName: value => textInputDriverCreator(byDataHook(el, 'companyName-input')).setValue(value),
})