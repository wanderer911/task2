const byDataHook = require('../../byDataHook')

module.exports = el => ({
  getLeftSide: () => byDataHook(el, 'left'),
  getResultSide: () => byDataHook(el,'result')
})