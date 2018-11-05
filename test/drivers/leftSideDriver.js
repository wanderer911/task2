const byDataHook = require('../byDataHook')
const btnClickDriver = require('./elementsDriver/btnClickDriver')

module.exports = el => ({
  changeSide: () => btnClickDriver(byDataHook(el, 'toggleSideVisibility-button')).triggerClick(),
})
