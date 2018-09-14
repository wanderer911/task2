'use strict'

function eventually(assertionFunc, timeout, delay, cb) {
  let lastError
  const startTime = new Date()
  const triggerWrapper = () => setTimeout(wrapper, delay)

  function wrapper() {
    if (new Date().getTime() - startTime.getTime() >= timeout) {
      return cb(lastError)
    }

    try {
      assertionFunc((err, res) => {
        lastError = err
        if (err) return triggerWrapper()
        else return cb(null, res)
      })
    } catch (e) {
      lastError = e
      return triggerWrapper()
    }
  }

  wrapper()
}

module.exports = function(
  assertionFunc,
  { timeout = 1500, delay = 5 } = { timeout: 1500, delay: 5 }
) {
  return new Promise((resolve, reject) => {
    eventually(
      assertCb => {
        try {
          const assertionFuncResult = assertionFunc()
          Promise.resolve(assertionFuncResult).then(
            res => assertCb(null, res),
            assertCb
          )
        } catch (e) {
          assertCb(e)
        }
      },
      timeout,
      delay,
      (err, res) => (err ? reject(err) : resolve(res))
    )
  })
}
