const conection = require("../banco de dados/bancodedados")
const queries = require("../banco de dados/queries");

const verificarNomeInstituicao = async (req, res, next) => {
    const { nome, endereco } = req.body;

    if (!nome && !endereco) {
        return res.status(404).json(({
            "mensagem": "Todos os campos são obrigatórios!"
        }))
    }

    const verificarNome = await conection.query(queries.verificarNome, [nome]);

    if (verificarNome.rowCount === 1) {
        return res.status(400).json({
            "mensagem": "Uma instituição com este nome já esta cadastrada"
        })
    }

    next();
}

const verificarAdministrador = async (req, res, next) => {
    const { nome, email, usuario, senha } = req.body;

    if (!nome || !email || !usuario || !senha) {
        return res.status(404).json(({
            "mensagem": "Todos os campos são obrigatórios!"
        }))
    }
    if (senha < 8 && senha > 32) {
        return res.status(403).json(({ mensagem: "A senha deve conter no mínimo 8 dígitos e no máximo 32 dígitos." }))
    }

    const verificarDadosAdm = await conection.query(queries.verificarAdministrador, [email, usuario]);

    if (verificarDadosAdm.rowCount === 1) {
        return res.status(400).json({
            "mensagem": "E-mail ou Usuário já existem."
        })
    }

    next()
}

const verificarEdicaoAdm = async (req, res, next) => {
    const { email, usuario, senha } = req.body;

    if (!email || !usuario || !senha) {
        return res.status(404).json(({
            "mensagem": "Todos os campos são obrigatórios!"
        }))
    }
    if (senha < 8 && senha > 32) {
        return res.status(403).json(({ mensagem: "A senha deve conter no mínimo 8 dígitos e no máximo 32 dígitos." }))
    }

    const verificarDadosAdm = await conection.query(queries.verificarAdministrador, [email, usuario]);

    if (verificarDadosAdm.rowCount === 1) {
        return res.status(400).json({
            "mensagem": "E-mail ou Usuário já existem."
        })
    }

    next()
}

module.exports = {
    verificarNomeInstituicao,
    verificarAdministrador,
    verificarEdicaoAdm
}
