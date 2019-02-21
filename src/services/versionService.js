const properties = require('properties')(process.env.NODE_ENV),
      logger     = require('logger').getLogger('version.versionService');

const version = properties && properties.version;
const domain = properties && properties.jsDomain;

module.exports = {
    /**
    * @function getVersionForContext get the version depends on the web context
    * @param {function} cb callback, return function.
    * @param {string} ctx Context from web
    */
    getVersionForContext: (ctx, cb) => {
        if (version){
            return cb(null, { version: version.hasOwnProperty(ctx) && version[ctx] !== '' ? version[ctx] : version['default'], jsdomain: domain } );
        } else {
            logger.warn(`---- Properties version were not loaded`);
            return cb(true, null);
        }
    }
};