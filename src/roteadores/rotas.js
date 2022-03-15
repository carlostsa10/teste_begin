const { cadastrarInstituicao, listarInstituicoes, cadastrarLivro, listarLivros, editarLivro, cadastrarAdministrador, editarAdministrador } = require('../controladores/controladores');

const { verificarNomeInstituicao, verificarAdministrador, verificarEdicaoAdm } = require('../intermediarios/intermediarios');

const express = require("express");
const roteador = express();

roteador.get('/instituicoes', listarInstituicoes)
roteador.post('/instituicoes/:id', verificarNomeInstituicao, cadastrarInstituicao);
roteador.post('/livros', cadastrarLivro);
roteador.get('/livros', listarLivros);
roteador.put('/livro/:id', editarLivro);
roteador.post('/administrador', verificarAdministrador, cadastrarAdministrador);
roteador.put('/administrador/:id', verificarEdicaoAdm, editarAdministrador)

module.exports = roteador;