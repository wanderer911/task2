const root = require('../src/root.js').default;
const jsdom  = require('jsdom');
const {JSDOM} = jsdom;
// const inputDriverFactory = require('wix-style-react/dist/src/Input/Input.driver').default;
const  ReactTestUtils = require('react-dom/test-utils');

function setup() {
    const { document } = (new JSDOM(`<!DOCTYPE html><html><body><div id="root"></div></body></html>`)).window;

    root(document);

    return document;
}

const triggerEvent = (el, eventName, document) => {
    const events = {
      click: {
        type: 'Events',
        bubbles: true,
        cancelable: true
      },
      input: {
        type: 'Events',
        bubbles: true,
        cancelable: true
      },
      '@default': {
        type: 'HTMLEvents',
        bubbles: true,
        cancelable: false
      }
    }
  
    const { type, bubbles, cancelable } = events[eventName] || events['@default']
    const evt = document.createEvent(type)
    evt.initEvent(eventName, bubbles, cancelable)
    el.dispatchEvent(evt)
  }

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const simulateTextEnterOnInputComponent = (inputElement, text, document) => {
    // const nativeInputeElement = inputElement.querySelector('input')
    inputElement.value = text
    triggerEvent(inputElement, 'input', document)
}

describe('just test jest', () => {
    test('should have text input for name', async () => {
        const document = setup();
        const textToEnter = 'blabla'
        
        simulateTextEnterOnInputComponent(document.querySelector('[data-hook="name-input"]'), textToEnter, document)
        await sleep(200)
        expect(document.querySelector('[data-hook="name-preview"]').textContent).toBe(textToEnter)
    })
})