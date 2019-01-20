var Icons = require('./light.json')

var _iconsCache = {}

Object.keys(Icons).map(function (item, key) {
  var data = {
    prefix: 'fal',
    iconName: key,
    icon: item
  }

  var keyArray = key.toString().split('')
  var newKey = ''
  var upperCase = false
  keyArray.map(function (keyItem) {
    if (keyItem === '-') {
      upperCase = true
    } else if (upperCase) {
      upperCase = false
      newKey += (keyItem.toUpperCase())
    } else {
      newKey += keyItem
    }
  })

  _iconsCache['fa' + newKey] = data
  exports['fa' + newKey] = data
})

exports.fal = _iconsCache
exports.prefix = 'fal'