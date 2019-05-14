'use strict';
 
const jayson = require('jayson');
 
// create a client
const client = jayson.client.http({
  host: "127.0.0.1",
  port: 9443,
//   auth: {
//     user: 'chain-bank789',
//     pass: 'pwd0123'
//   },
});
 
// invoke "add"
client.request('omni_getinfo', [], function(err, response) {
  if(err) throw err;
  console.log(response.result); // 2
});