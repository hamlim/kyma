document.addEventListener('DOMContentLoaded', function(event) {
  var userlocation
  getlocation = new XMLHttpRequest()
  getlocation.onreadystatechange = function() {
    userlocation = getlocation.responseText
  }
  getlocation.open('GET', '//freegeoip.net/json/', 'false') //ugh just because I don't want to spin up some Promises
  getlocation.send()

  var package = {}
  package.message = JSON.stringify(userlocation)
  sendlocation = new XMLHttpRequest()
  sendlocation.open('POST', 'https://formspree.io/neil@kymainternational.com')
  sendlocation.setRequestHeader('Accept', 'application/json')
  sendlocation.send(JSON.stringify(package))
})
