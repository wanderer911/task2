const byDataHook = require('../../byDataHook')
const btnClickDriver = require('../elementsDriver/btnClickDriver')

module.exports = el => ({
    clickFinishBtn: () => btnClickDriver(byDataHook(el, 'finish-button')).triggerClick(),
    getInputSide: () => byDataHook(el, 'input-side'),
    getBackSide: () => byDataHook(el, 'back-side'),
    clickToggleSideVisibility: () => btnClickDriver(byDataHook(el, 'toggleSideVisibility-button')).triggerClick(),
}) 