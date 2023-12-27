'use strict';
const models = require('./models');
var { inRange} = require('range_check');
const digestAuth = require('drachtio-mw-digest-auth') ;

exports.checkIpAccessList = function(req, res, next) {
    logger.debug(`checkSender: ${req.source_address}`);
    if( !inRange( req.source_address, config.authorizedSources) ) { 
      logger.debug(`checkSender: ${req.source_address} is not authorized`);
      return res.send(403) ; 
    }
    next() ;
}

exports.registerChallenge = digestAuth({
    passwordLookup: function(username, realm, callback) {
      // ..lookup password for username in realm
      return callback(null, "alice") ;
    }
  }) ;
  