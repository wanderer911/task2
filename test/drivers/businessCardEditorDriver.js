const byDataHook = require('../byDataHook')
const inputSideDriverCreator = require('./inputSideDriver')
const previewDriverCreator = require('./previewDriver')
const backSideDriver = require('./backSideDriver')
const leftSide = require('./leftSideDriver')

module.exports = el => ({
  getInputSideDriver: () => inputSideDriverCreator(byDataHook(el, 'input-side')),
  getPreviewDriver: () => previewDriverCreator(byDataHook(el, 'preview')),
  getBackSideDriver: () => backSideDriver(byDataHook(el, 'back-side')),
  getLeftSideDriver: () => leftSide(byDataHook(el,'left'))
})
