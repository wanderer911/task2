require('./jsdomClean') 
const eventually = require('./eventually')
const renderApp = require('../src/root.js').default
const businessCardEditorDriverCreator = require('./drivers/bussinessCardEditorDriver')
const store = require('../src/helpers')

describe('Business Card Editor', () => {
  let businessCardDriver;
  let appDriver;
  let leftSideDriver;

  const person = {
    firstName: 'Andrii',
    lastName: 'Skorokhod',
    title: 'Developer',
    telephone: '+380679986400',
    email: 'andriis@wix.com',
    companyName: 'wix'
  }

  beforeEach(() => {
    renderApp()
    const root = document.getElementById('root')
    businessCardDriver = businessCardEditorDriverCreator(root)
    appDriver = businessCardDriver.getAppDriver()
    leftSideDriver = businessCardDriver.getLeftSideDriver()
  })


  afterEach(() => {
    store.store.dispatch({ type: "CLEAR_STATE" });
  })

  test('should show left side container when app loads', async function () {
    await eventually(() => expect(appDriver.getLeftSide()).toBeTruthy())
  })

  test('should show right side container when app loads', async function () {
    await eventually(() => expect(appDriver.getResultSide()).toBeTruthy())
  })

  test('should hide left side after  btn final was clicked',async function (){
    leftSideDriver.clickFinishBtn()
    await eventually(() => expect(appDriver.getLeftSide()).toBeFalsy())
  })

  test('should show InputSideContainer based on default visibility',async function (){
    await eventually(() => expect(leftSideDriver.getInputSide()).toBeTruthy()) 
    await eventually(() => expect(leftSideDriver.getBackSide()).toBeFalsy())
  })

  test('should show BackSideContainer after toggleSideVisibility-button was clicked',async function (){
    leftSideDriver.clickToggleSideVisibility()
    await eventually(() => expect(leftSideDriver.getInputSide()).toBeFalsy()) 
    await eventually(() => expect(leftSideDriver.getBackSide()).toBeTruthy())
  })
})
