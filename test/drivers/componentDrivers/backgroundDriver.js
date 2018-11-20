const byDataHook = require('../../byDataHook')
const colorPickerDriverCreator = require('../elementsDriver/colorPickerDriver')
const btnClickDriver = require('../elementsDriver/btnClickDriver')

module.exports = el => ({
    changeColor: (value) => colorPickerDriverCreator(el).setColor(value),
    openModal: (hook) => btnClickDriver(byDataHook(el, hook)).triggerClick()
})