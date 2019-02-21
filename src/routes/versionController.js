const express        = require('express'),
      router         = express.Router(),
      versionService = require('../services/versionService'),
      logger         = require('logger').getLogger('version.versionController');

// CALLBACKS
const versionController = (req, res) => {

  let context;
  context = req.query.context ? req.query.context : 'default';
  logger.debug(`---- Requested Context => ${context}`);

  versionService.getVersionForContext(context, (err, config) => {
      if(err) {
          logger.error(`Version for ${context} not defined`);
          res.status(400).end();
          return;
      }
      res.format({
        'application/json': () => {
            res.send(config);
        },
        'default': () => {
            res.status(406).send('Not Acceptable');
        }
      });
  });

};

// ROUTING
router.get('/', versionController);

module.exports = router;