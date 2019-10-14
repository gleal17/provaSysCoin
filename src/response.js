module.exports = {
    msg(req, res) {
        if (req.query.user == 'syscoin' && req.query.password == 'meEscolhe') {
            res.send('Meu nome completo é Guilherme Lima Matos Leal. Eu quero essa vaga!!!');
        } else {
            res.send('Credenciais erradas.');
        }
    }
};