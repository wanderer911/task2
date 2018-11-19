const byDataHook = require('../../byDataHook')
const colorPickerDriverCreator = require('../elementsDriver/colorPickerDriver')

module.exports = el => ({
    changeColor: value => {
        console.log(el);
        return colorPickerDriverCreator(byDataHook(el, hook)).setColor(value)
    },
})