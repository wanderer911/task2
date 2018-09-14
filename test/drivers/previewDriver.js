const byDataHook = require('../byDataHook')

module.exports = el => ({
  getName: () => byDataHook(el, 'name').textContent,
  getTitle: () => byDataHook(el, 'title').textContent
})
