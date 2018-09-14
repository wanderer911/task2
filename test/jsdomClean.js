const { unmountComponentAtNode } = require('react-dom')

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
