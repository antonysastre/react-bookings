export const binder = (fn, ...args) => { return fn.bind(null, ...args) }

const _piper = (f, b) => (...args) => b(f(...args))
export const piper = (...fns) => (fns.reduce(_piper) )
