'use strict' ;

var Srf = require('drachtio-srf') ;
var srf = new Srf() ;
const Mrf = require('drachtio-fsmrf');
const mrf = new Mrf(srf) ;
const logger = require('./app/logger') ;
var config = require('./app/config') ;

const {handleInvite} = require('./app/handlers') ; 
const {registerChallenge} = require('./app/middleware') ; 

var _ = require('lodash') ;

const models = require('./app/models');

logger.debug('using config: %s', JSON.stringify(config, null, 2)) ;
srf.connect(config.drachtioServer) ;

srf.on('connect', function(err, hostport) {
  logger.info(`connected to drachtio listening on ${hostport}`);
}) 
.on('error', function(err){
  logger.error(err, 'Error connecting to drachtio') ;
}) ;


mrf.connect({address: '127.0.0.1', port: 8021, secret: 'JambonzR0ck$'})
  .then((mediaserver) => {
    logger.info('connected to mediaserver');
  })
  .catch ((err) => {
    logger.error(err, 'Error connecting to mediaserver') ;
  });


// srf.use(checkSender);

srf.use( 'register', registerChallenge) ;

srf.register((req, res) => {
    console.log(req.authorization) ;
    res.send(200, {
      headers: {
        'X-Header': 'foo'
      }
    });
  });

srf.invite(handleInvite);