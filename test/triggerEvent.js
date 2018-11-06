module.exports = (el, eventName) => {
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
    change: {
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
