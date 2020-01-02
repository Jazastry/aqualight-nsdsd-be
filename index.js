var ip = require("ip");
// import the module
const mdns = require('mdns');

var txt_record = {
  ip: ip.address().toString()
};
const getAd = () => {
  return mdns.createAdvertisement(mdns.tcp('http'), 1337, {
    name: 'aqualight',
    networkInterface: ip.address(),
    txtRecord: txt_record
  }, (err, data) => {
    if (err) consle.error(err)
    // console.log('data', data)
  });
}
let ad = getAd()
ad.start();
setInterval(() => {
  ad.stop();
  ad = getAd();
  ad.start();
}, 3000)

// var bonjour = require('bonjour')()

// // // advertise an HTTP server on port 3000
// bonjour.publish({name: 'aqua', type: 'http', protocol: 'tcp', port: 1336, host: 'local'})
// bonjour.publish({name: 'aqualight-b', type: 'http', protocol: 'tcp', port: 1337 })

// // // // browse for all http services
// bonjour.find({
//   type: 'http',
//   protocol: 'tcp',
//   // host: 'olinuxino.local',
// }, function (service) {
//   console.log('Found an HTTP server:', service)
// })

