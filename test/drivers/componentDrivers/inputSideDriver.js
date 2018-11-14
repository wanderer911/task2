const byDataHook = require('../../byDataHook')
const btnClickDriver = require('../elementsDriver/btnClickDriver')

module.exports = el => ({
    clickFinishBtn: () => btnClickDriver(byDataHook(el, 'finish-button')).triggerClick(),
}) 