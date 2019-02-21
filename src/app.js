const properties        = require('properties')(process.env.NODE_ENV),
      express           = require('express'),
      versionController = require('./routes/versionController');
    
let app = express();

app.use(`/servicios/${properties.service_path}`, versionController);
app.use('*', (req, res, next) => {
    res.status(400).send({error:'400 Bad Request'});
    res.end();
});

module.exports = app;