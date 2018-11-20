const byDataHook = require('../../byDataHook')
const textInputDriverCreator = require('../elementsDriver/textInputDriver')


module.exports = () => ({
    setSearchKeyWord: value => textInputDriverCreator(byDataHook(document.body, 'searchKeyWord-input')).setValue(value),
    getFlickrResult: () => byDataHook(document.body,'flickr-result').textContent,
}) 