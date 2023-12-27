'use strict';


// copy to config.js and add your info
// =================================
module.exports = {

  drachtioServer: {
    host: '127.0.0.1',
    port: 9022,
    secret: 'cymru'
  },
  targets: [
    {
      address: '127.0.0.1',    //IP address freeswitch event socket is listening on
      port: 8021,                       //port freeswitch event socket is listening on
      secret: 'ClueCon',                     //freeswitch secret
      profile: 'external',              //sofia sip profile to send SIP requests to
      enabled: true                     //if false, skip this destination (note: you can edit while running and it will take affect)
    },
  ], 
  maxTargets: 2,
} ;