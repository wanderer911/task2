const byDataHook = require('../../byDataHook')

module.exports = el => ({
  getFirstName: () => byDataHook(el, 'first-name-text').textContent,
  getLastName: () => byDataHook(el, 'last-name-text').textContent,
  getFullName: ()=> byDataHook(el, 'full-name-text').textContent,
  getTitle: () => byDataHook(el, 'title-text').textContent,
  getTelephone: () => byDataHook(el, 'telephone-text').textContent,
  getEmail: () => byDataHook(el, 'email-text').textContent,
  getCompanyName: () => byDataHook(el,'companyName-text').textContent,
  getColorFront: () => byDataHook(el,'result-front').style.backgroundColor,
  getColorBack: () => byDataHook(el,'result-back').style.backgroundColor,
})
