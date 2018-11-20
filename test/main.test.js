require('./jsdomClean') 
const eventually = require('./eventually')
const renderApp = require('../src/root.js').default
const businessCardEditorDriverCreator = require('./drivers/bussinessCardEditorDriver')
const store = require('../src/helpers')
const byDataHook = require('./byDataHook')

describe('Business Card Editor', () => {
  let businessCardDriver;
  let appDriver;
  let leftSideDriver;
  let inputSideDriver;
  let resultSideDriver;
  let backSideDriver;
  let backgroundDriverFront;
  let backgroundDriverBack;
  let backgroundDriverLogo;

  const person = {
    firstName: 'Andrii',
    lastName: 'Skorokhod',
    title: 'Developer',
    telephone: '+380679986400',
    email: 'andriis@wix.com',
    companyName: 'wix',
    redColor: '#FF0000'
  }

  beforeEach(() => {
    renderApp()
    const root = document.getElementById('root')
    businessCardDriver = businessCardEditorDriverCreator(root)
    appDriver = businessCardDriver.getAppDriver()
    leftSideDriver = businessCardDriver.getLeftSideDriver()
    inputSideDriver = businessCardDriver.getInputSideDriver()
    resultSideDriver = businessCardDriver.getResultSideDriver()
    backSideDriver = undefined;
    backgroundDriverFront = undefined;
    backgroundDriverBack = undefined;
    backgroundDriverLogo = undefined;
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
    expect.assertions(2);
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
    backSideDriver = businessCardDriver.getBackSideDriver()
    backSideDriver.setCompanyName(person.companyName)
    await eventually(() => expect(resultSideDriver.getCompanyName()).toEqual(person.companyName))
  })

  test('should have backgroundComponent with logo opened',async function (){
    await eventually(() => expect(appDriver.getBackgroundComponentByHook('logo')).toBeTruthy())
  })

  test('should open BackgroundContainer for frontBackgroundImage after checkbox click',async function(){
    inputSideDriver.toggleFrontSideBackground()
    await eventually(() => expect(appDriver.getBackgroundComponentByHook('frontBackgroundImage')).toBeTruthy())
  })

  test('should open BackgroundContainer on BackSide  for backBackgroundImage after checkbox clicked',async function (){
    leftSideDriver.clickToggleSideVisibility()
    backSideDriver = businessCardDriver.getBackSideDriver()
    backSideDriver.toggleBackSideBackground()
    await eventually(() => expect(appDriver.getBackgroundComponentByHook('backBackgroundImage')).toBeTruthy())
  })

  test('should change color of result-front box after color  in colorpicker was changed',async function(){
    inputSideDriver.toggleFrontSideBackground()
    backgroundDriverFront = businessCardDriver.getBackgroundDriver('frontBackgroundImage')
    backgroundDriverFront.changeColor(person.redColor,'frontBackgroundImage')
    await eventually(() => expect(resultSideDriver.getColorFront()).toEqual(person.redColor))
  })

  test('should change color of result-back box after color was changed',async function(){
    leftSideDriver.clickToggleSideVisibility()
    backgroundDriverBack = businessCardDriver.getBackgroundDriver('backBackgroundImage')
    backgroundDriverBack.changeColor(person.redColor,'backBackgroundImage')
    await eventually(() => expect(resultSideDriver.getColorBack().toEqual(person.redColor)))
    
  })

  test('should open modal window for logo  image search',async function(){
    backgroundDriverLogo = businessCardDriver.getBackgroundDriver('logo')
    backgroundDriverLogo.openModal('open-modal-logo')
    await eventually(() => expect(byDataHook(document.body,('logoModal'))).toBeTruthy())
  })

  test('should open modal window for frontBackground  image search',async function(){
    inputSideDriver.toggleFrontSideBackground()
    backgroundDriverFront = businessCardDriver.getBackgroundDriver('frontBackgroundImage')
    backgroundDriverFront.openModal('open-modal-frontBackgroundImage')
    await eventually(() => expect(byDataHook(document.body,'frontBackgroundImageModal').textContent).toBeTruthy())
  })

  test('should open modal window for backBackground  image search',async function(){
    leftSideDriver.clickToggleSideVisibility()
    backSideDriver = businessCardDriver.getBackSideDriver()
    backSideDriver.toggleBackSideBackground()
    backgroundDriverBack = businessCardDriver.getBackgroundDriver('backBackgroundImage')
    backgroundDriverBack.openModal('open-modal-backBackgroundImage')
    console.log(byDataHook(document.body,'backBackgroundImageModal').textContent)
    await eventually(() => expect(byDataHook(document.body,'backBackgroundImageModal').textContent).toBeTruthy())
  });
})
