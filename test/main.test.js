require('./jsdomClean') 
const eventually = require('./eventually')
const renderApp = require('../src/root.js').default
const businessCardEditorDriverCreator = require('./drivers/bussinessCardEditorDriver')
const store = require('../src/helpers')

describe('Business Card Editor', () => {
  let businessCardDriver;
  let appDriver;
  let leftSideDriver;
  let inputSideDriver;
  let resultSideDriver;
  let backSideDriver;

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
    inputSideDriver = businessCardDriver.getInputSideDriver()
    resultSideDriver = businessCardDriver.getResultSideDriver()
    backSideDriver = businessCardDriver.getBackSideDriver()
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

  test('should test that state is cleared after the each test', async function () {
    await eventually(() => expect(resultSideDriver.getFullName().trim()).toEqual(''))
  })

  //input tests
  test('should show first name on preview after it was entered on input side', async function () {
    inputSideDriver.setFirstName(person.firstName)
    await eventually(() => expect(resultSideDriver.getFirstName()).toEqual(person.firstName))
  })

  test('should show last name on preview after it was entered on input side', async function () {
    inputSideDriver.setLastName(person.lastName)
    await eventually(() => expect(resultSideDriver.getLastName().trim()).toEqual(person.lastName))
  })

  test('should show full name on preview after it was entered on input side', async function () {
    inputSideDriver.setFirstName(person.firstName)
    inputSideDriver.setLastName(person.lastName)
    await eventually(() => expect(resultSideDriver.getFullName()).toEqual(person.firstName + ' ' + person.lastName))
  })


  test('should show title on preview after it was entered on input side', async function () {
    inputSideDriver.setTitle(person.title)
    await eventually(() => expect(resultSideDriver.getTitle()).toEqual(person.title))
  })

  test('should show telephone  on preview after it was entered on input side', async function () {
    inputSideDriver.setTelephone(person.telephone)
    await eventually(() => expect(resultSideDriver.getTelephone()).toEqual(person.telephone))
  })

  test('should show email  on preview after it was entered on input side', async function () {
    inputSideDriver.setEmail(person.email)
    await eventually(() => expect(resultSideDriver.getEmail()).toEqual(person.email))
  })

  test('should change company name in resultSide after companyName input changed',async function(){
    leftSideDriver.clickToggleSideVisibility()
    const awaitBackSideRender = await eventually(() => expect(leftSideDriver.getBackSide()).toBeTruthy());
    if(awaitBackSideRender){
      backSideDriver.setCompanyName(person.companyName)
      await eventually(() => expect(resultSideDriver.getCompanyName()).toEqual(person.companyName))
    }
  })

  test('should have backgroundComponent with logo opened',async function (){
    await eventually(() => expect(appDriver.getBackgroundComponentByHook('logo')).toBeTruthy())
  })

  test('should open BackgroundContainer for frontBackgroundImage after checkbox click',async function(){
    inputSideDriver.toggleFrontSideBackground()
    await eventually(() => expect(appDriver.getBackgroundComponentByHook('frontBackgroundImage')).toBeTruthy())
  })


})
