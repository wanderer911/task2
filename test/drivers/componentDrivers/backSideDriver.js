const byDataHook = require('../../byDataHook')
const textInputDriverCreator = require('../elementsDriver/textInputDriver')

module.exports = el => ({
    setCompanyName: value => {
        console.log(el);
        return textInputDriverCreator(byDataHook(el, 'companyName-input')).setValue(value)
    },
})