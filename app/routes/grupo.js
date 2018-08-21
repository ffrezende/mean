const api = require('../api/grupo');

module.exports = (app) => {
    app.get('/v1/grupos', api.grupo);
}
