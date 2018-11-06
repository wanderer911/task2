const byDataHook = require('../byDataHook')
const inputSideDriverCreator = require('./inputSideDriver')
const previewDriverCreator = require('./previewDriver')
const backSideDriver = require('./backSideDriver')
const leftSideDriver = require('./leftSideDriver')
const appDriver = require('./appDriver')
const backgroundDriver = require('./backgroundContainerDriver')

module.exports = el => ({
  getInputSideDriver: () => inputSideDriverCreator(byDataHook(el, 'input-side')),
  getPreviewDriver: () => previewDriverCreator(byDataHook(el, 'preview')),
  getBackSideDriver: () => backSideDriver(byDataHook(el, 'back-side')),
  getLeftSideDriver: () => leftSideDriver(byDataHook(el,'left')),
  getApp: () => appDriver(byDataHook(el,'app')),
  getBackgroundFront: () => backgroundDriver(byDataHook(el,'frontBackgroundImage'))
})
