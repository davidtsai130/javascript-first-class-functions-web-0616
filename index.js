function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction(fn) {
  return function fn() {}
}

function returnsAnAnonymousFunction() {
  return () => {}
}