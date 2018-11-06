const byDataHook = require('../byDataHook')
// const textInputDriverCreator = require('./elementsDriver/textInputDriver')
// const checkboxDriver = require('./elementsDriver/checkboxDriver')
const btnClickDriver = require('./elementsDriver/btnClickDriver')

module.exports = el => {
    console.log(el?el.outerHTML:el)
    return {
        isVisible: () => el,
        openModal: (modalHook) =>  {
            const btn = byDataHook(el,modalHook)
            console.log(btn.outerHTML)
            btnClickDriver(btn).triggerClick()
        },
    }
}