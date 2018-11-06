require('./jsdomClean') 
const renderApp = require('../src/root.js').default;
const businessCardEditorDriverCreator = require('./drivers/businessCardEditorDriver')
const eventually = require('./eventually')
const store = require('../src/helpers')


describe('Business Card Editor', () => {
  const person = {
    firstName: 'Andrii',
    lastName: 'Skorokhod',
    title: 'Developer',
    telephone: '+380679986400',
    email: 'andriis@wix.com',
    companyName: 'wix'
  }
  let businessCardDriver;
  let inputSideDriver;
  let previewDriver;
  let backSideDriver;
  let leftSideDriver;


  beforeEach(() => {
    renderApp()
    const root = document.getElementById('root')
    businessCardDriver = businessCardEditorDriverCreator(root)
    inputSideDriver = businessCardDriver.getInputSideDriver()
    previewDriver = businessCardDriver.getPreviewDriver()
    backSideDriver = businessCardDriver.getBackSideDriver()
    leftSideDriver = businessCardDriver.getLeftSideDriver()
  })

  

  afterEach(() => {
    store.store.dispatch({type:"CLEAR_STATE"});
   })

  test('should show first name on preview after it was entered on input side', async function () {
    inputSideDriver.setFirstName(person.firstName)
    await eventually(() => expect(previewDriver.getFirstName()).toEqual(person.firstName))
  })

  test('should show last name on preview after it was entered on input side', async function () {
    inputSideDriver.setLastName(person.lastName)
    await eventually(() => expect(previewDriver.getLastName().trim()).toEqual(person.lastName))
  })

  test('should test that state is cleared after the each test', async function () {
    await eventually(() => expect(previewDriver.getFullName().trim()).toEqual(''))
  })

  test('should show full name on preview after it was entered on input side', async function () {
    inputSideDriver.setFirstName(person.firstName)
    inputSideDriver.setLastName(person.lastName)
    await eventually(() => expect(previewDriver.getFullName()).toEqual(person.firstName + ' ' + person.lastName))
  })


  test('should show title on preview after it was entered on input side', async function () {
    inputSideDriver.setTitle(person.title)
    await eventually(() => expect(previewDriver.getTitle()).toEqual(person.title))
  })

  test('should show telephone  on preview after it was entered on input side', async function () {
    inputSideDriver.setTelephone(person.telephone)
    await eventually(() => expect(previewDriver.getTelephone()).toEqual(person.telephone))
  })

  test('should show email  on preview after it was entered on input side', async function () {
    inputSideDriver.setEmail(person.email)
    await eventually(() => expect(previewDriver.getEmail()).toEqual(person.email))
  })


  //test('should show title on privew after entering title on input side', async () => {
  //  inputSideDriver.setTitle('dev')

  //  await eventually(() => expect(previewDriver.getTitle()).toEqual('dev'))
  //})
})
