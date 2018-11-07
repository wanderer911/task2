const byDataHook = require('../byDataHook')
const appDriver = require('./componentDrivers/appDriver')


module.exports = el => ({
    getAppDriver: () => appDriver(byDataHook(el,'app')),
})