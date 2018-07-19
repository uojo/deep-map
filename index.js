module.exports = function (data, callback) {
  function _map (val, key, pt, tags) {
    tags = tags || []
    callback(val, key, pt, tags)
    // 遍历对象
    if (val === undefined || val === null) {

    } else if (val.constructor === Object) {
      for (var k in val) {
        var da = val[k]
        _map(da, k, val, tags)
      }
    } else if (val.constructor === Array) {
      // 遍历数组
      for (var i = 0, len = val.length; i < len; i++) {
        var it = val[i]
        _map(it, i, val, tags.concat(i))
      }
    }
  }

  _map(data)

  return data
}
