'use strict';

exports.handleInvite = function (req, res) {
    res.send(486, 'So happy, busy right now', {
        headers: {
          'X-Custom-Header': 'because why not?'
        }
    });
}