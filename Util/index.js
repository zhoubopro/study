// 千位符
var toThousands = function(number) {
  // return (number + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  return number.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2})
}

var getId = function (id) {
  return document.getElementById(id)
}

//