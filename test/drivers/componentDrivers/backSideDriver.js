const byDataHook = require('../../byDataHook')
const textInputDriverCreator = require('../elementsDriver/textInputDriver')
const checkBoxDriverCreator = require('../elementsDriver/checkboxDriver')

module.exports = el => ({
    setCompanyName: value => {
        console.log(el);
        return textInputDriverCreator(byDataHook(el, 'companyName-input')).setValue(value)
    },
    toggleBackSideBackground: () => checkBoxDriverCreator(el, 'isBackSideBackground-checkbox').toggle(),
})