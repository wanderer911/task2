const byDataHook = require('../byDataHook')
const appDriver = require('./componentDrivers/appDriver')
const leftSideDriver = require('./componentDrivers/leftSideDriver')
const inputSideDriver = require('./componentDrivers/inputSideDriver')
const resultSideDriver = require('./componentDrivers/resultSideDriver')
const backSideDriver = require('./componentDrivers/backSideDriver')
const backgroundDriver = require('./componentDrivers/backgroundDriver')
const imageModalDriver = require('./componentDrivers/imageModalDriver')

module.exports = el => ({
    getAppDriver: () => appDriver(byDataHook(el, 'app')),
    getLeftSideDriver: () => leftSideDriver(byDataHook(el, 'left')),
    getInputSideDriver: () => inputSideDriver(byDataHook(el, 'input-side')),
    getResultSideDriver: () => resultSideDriver(byDataHook(el, 'result')),
    getBackSideDriver: () => backSideDriver(byDataHook(el, 'back-side')),
    getBackgroundDriver: (hook) => backgroundDriver(byDataHook(el, hook)),
    getImageModalDriver:() => imageModalDriver(),
})
