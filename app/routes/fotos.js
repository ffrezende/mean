const api = require('../api/fotos');

module.exports = (app) => {

    app.route('/v1/fotos')
    .get(api.lista)
    .post(api.adiciona);
  
    app.route('/v1/fotos/:id')
    .get(api.listaPorId)
    .delete(api.delete);
}