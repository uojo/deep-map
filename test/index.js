var deepMap = require('../index')
var data = {
  a: 1,
  b: {
    c: 3,
    d: [
      {id: 1, name: 'apple'},
      {id: 2, name: 'orange'}
    ]
  },
  e: ['hello', 100, null, undefined]
}

deepMap(data, (val, key, parent, tags) => {
  console.log(key, val)
})
