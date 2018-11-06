const byDataHook = require('../byDataHook')
// const textInputDriverCreator = require('./elementsDriver/textInputDriver')
// const checkboxDriver = require('./elementsDriver/checkboxDriver')
const btnClickDriver = require('./elementsDriver/btnClickDriver')

// module.exports = el => ({
//   setCompanyName: value => textInputDriverCreator(byDataHook(el, 'companyName-input')).setValue(value),
//   isVisible: (hook) => {
//       return byDataHook(el,hook)}
//       ,
// //   showBackgroundHandlerContainer: value => checkboxDriver(el, 'frontVisilibility-checkbox').setValue(value)
// //TODO btn click image choose trigger
// })


module.exports = el => {
    console.log(el)
    return {
        setCompanyName: value => textInputDriverCreator(byDataHook(el, 'companyName-input')).setValue(value),
        isVisible: () => el
        
    }
}