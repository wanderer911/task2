const byDataHook = require('../byDataHook')
const btnClickDriver = require('./elementsDriver/btnClickDriver')

module.exports = el => ({
  changeSide: () => btnClickDriver(byDataHook(el, 'toggleSideVisibility-button')).triggerClick(),
  clickFinal: () => btnClickDriver(byDataHook(el,'finish-button')).triggerClick(),
  getBackSide: () => byDataHook(el, 'back-side'),
  getFrontSide: () => byDataHook(el, 'input-side'),
  getApp: () => byDataHook(el,'app')
})
