const byDataHook = require('../../byDataHook')
const colorPickerDriverCreator = require('../elementsDriver/colorPickerDriver')
const btnClickDriver = require('../elementsDriver/btnClickDriver')

module.exports = el => ({
    changeColor: (value,hook) => {
        console.log(el);
        return colorPickerDriverCreator(byDataHook(el, hook)).setColor(value)
    },
    openModal: (hook) => btnClickDriver(byDataHook(el, hook)).triggerClick()
})