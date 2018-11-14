const byDataHook = require('../byDataHook')
const appDriver = require('./componentDrivers/appDriver')
const leftSideDriver = require('./componentDrivers/leftSideDriver')

module.exports = el => ({
    getAppDriver: () => appDriver(byDataHook(el,'app')),
    getLeftSideDriver: () => leftSideDriver(byDataHook(el,'left')),
})