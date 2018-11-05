const { unmountComponentAtNode } = require('react-dom')
const App = require('../src/App');
beforeEach(() => {
  const newBody = document.createElement('body')
  document.body = newBody

  const mountPoint = document.createElement('div')
  mountPoint.id = 'root'

  document.body.appendChild(mountPoint)
})

afterEach(() => {
  const appDomNode = document.getElementById('root')
  unmountComponentAtNode(appDomNode)
})

  // afterEach(() => {
  //   document.body.innerHTML = ''
  //  })
