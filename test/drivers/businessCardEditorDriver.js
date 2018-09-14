const byDataHook = require('../byDataHook')
const inputSideDriverCreator = require('./inputSideDriver')
const previewDriverCreator = require('./previewDriver')

module.exports = el => ({
  getInputSideDriver: () => inputSideDriverCreator(byDataHook(el, 'input-side')),
  getPreviewDriver: () => previewDriverCreator(byDataHook(el, 'preview'))
})
