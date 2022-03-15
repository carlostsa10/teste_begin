const conection = require("../banco de dados/bancodedados")
const queries = require("../banco de dados/queries");

const listarInstituicoes = async (req, res) => {
    try {
        const { rows: instituicoes } = await conection.query(queries.listarInstituicoes);

        return res.status(200).json(instituicoes)

    } catch (error) {
        return res.status(400).json(error.message)
    }
}

const cadastrarInstituicao = async (req, res) => {
    const { id } = req.params
    const { nome, endereco } = req.body;

    try {
        const instituicao = await conection.query(queries.cadastrarInstituicao, [nome, endereco, id]);

        if (instituicao.rowCount === 0) {
            return res.status(400).json({
                "mensagem": "Não foi possível cadastrar a Instituição!"
            })
        }

        return res.status(201).json({
            "mensagem": "Instituição cadastrada com sucesso!"
        })
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

const cadastrarLivro = async (req, res) => {
    const { nome,
        edicao,
        ano,
        data_lancamento,
        estado,
        instituicao,
        estoque,
        endereco_livro } = req.body;

    try {
        const livro = await conection.query(queries.cadastrarLivro, [nome, edicao, ano, data_lancamento, estado, instituicao, estoque, endereco_livro]);

        if (livro.rowCount === 0) {
            return res.status(400).json({
                "mensagem": "Não foi possível cadastrar este livro!"
            })
        }
        return res.status(201).json({
            "mensagem": "Livro cadastrado com sucesso!"
        })

    } catch (error) {
        return res.status(400).json(error.message)
    }
}

const listarLivros = async (req, res) => {
    try {
        const { rows: livros } = await conection.query(queries.listarLivros);

        return res.status(200).json(livros)

    } catch (error) {
        return res.status(400).json(error.message)
    }
}

const editarLivro = async (req, res) => {
    const { id } = req.params;
    const { edicao, estado, instituicao } = req.body;

    try {
        const livro = await conection.query(queries.editarLivro, [edicao, estado, instituicao, id]);

        if (livro.rowCount === 0) {
            return res.status(400).json({
                "mensagem": "Não foi possível atualizar os dados do livro submetido."
            })
        }
        return res.status(201).json({
            "mensagem": "Livro editado com sucesso!"
        })

    } catch (error) {
        return res.status(400).json(error.message)
    }
}

const cadastrarAdministrador = async (req, res) => {
    const { nome,
        email,
        usuario,
        senha } = req.body;

    try {
        const administrador = await conection.query(queries.cadastrarAdministrador, [nome, email, usuario, senha]);

        if (administrador.rowCount === 0) {
            return res.status(400).json({
                "mensagem": "Não foi possível cadastrar este administrador!"
            })
        }
        return res.status(201).json({
            "mensagem": "Administrador cadastrado com sucesso!"
        })

    } catch (error) {
        return res.status(400).json(error.message)
    }
}

const editarAdministrador = async (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    try {
        const administradorAtualizado = await conection.query(queries.editarAdministrador, [nome, email, senha, id])

        if (administradorAtualizado.rowCount === 0) {
            return res.status(400).json({
                "mensagem": "Não foi possível atualizar os dados do Administrador!"
            })
        }
        return res.status(201).json({
            "mensagem": "Administrador atualizado com sucesso!"
        })
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

module.exports = {
    listarInstituicoes,
    cadastrarInstituicao,
    cadastrarLivro,
    editarLivro,
    listarLivros,
    cadastrarAdministrador,
    editarAdministrador,

}