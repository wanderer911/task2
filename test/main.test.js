require('./jsdomClean') 
const renderApp = require('../src/root.js').default;
const businessCardEditorDriverCreator = require('./drivers/businessCardEditorDriver')
const eventually = require('./eventually')

describe('Business Card Editor', () => {
  let businessCardDriver;
  let inputSideDriver;
  let previewDriver;

  beforeEach(() => {
    renderApp()
    const root = document.getElementById('root')
    businessCardDriver = businessCardEditorDriverCreator(root)

    inputSideDriver = businessCardDriver.getInputSideDriver()
    previewDriver = businessCardDriver.getPreviewDriver()
  })

  test('should show first name on preview after it was entered on input side', async function () {
    inputSideDriver.setFirstName('Bohdan')
    await eventually(() => expect(previewDriver.getName()).toEqual('Bohdan'))
  })

  //test('should show full name on preview after entering fist name and last name', async () => {
  //  inputSideDriver.setFirstName('Bohdan')
  //  inputSideDriver.setLastName('Lytvynov')

  //  await eventually(() => expect(previewDriver.getName()).toEqual('Bohdan Lytvynov'))
  //})

  //test('should show title on privew after entering title on input side', async () => {
  //  inputSideDriver.setTitle('dev')

  //  await eventually(() => expect(previewDriver.getTitle()).toEqual('dev'))
  //})
})
