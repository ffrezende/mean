var api = {};
var contador = 2;

var fotos = [
    { _id: 1, titulo: 'Leão', url: 'http://www.fundosanimais.com/Minis/leoes.jpg' },
    { _id: 2, titulo: 'Leão 2', url: 'http://www.fundosanimais.com/Minis/leoes.jpg' }
];

api.lista = (req, res) => {
    res.json(fotos);
};

api.listaPorId = (req, res) => {
    let foto = fotos.find((foto) => {
        return foto._id == req.params.id;
    });
    res.json(foto);
};

api.delete = (req, res) => {
    fotos = fotos.filter((foto) => {
        return foto._id != req.params.id;
    });
    res.sendStatus(204);
};

api.adiciona = (req, res) => {
    let newFoto = req.body;
    newFoto._id = ++ contador;
    fotos.push(newFoto);
    res.json(newFoto);
}

module.exports = api;