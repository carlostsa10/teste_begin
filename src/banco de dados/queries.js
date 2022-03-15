const listarInstituicoes = "SELECT * FROM instituicoes";
const verificarInstituicao = "SELECT s FROM instituicoes s WHERE s.nomeDaInstituicao = $1";
const cadastrarInstituicao = "INSERT INTO instituicoes (nome, endereco, administrador_id) VALUES ($1, $2, $3)";
const listarLivros = "SELECT * FROM livros";
const encontrarLivro = "SELECT s FROM livros WHERE s.nome = $1";
const cadastrarLivro = "INSERT INTO livros (nome, edicao, ano, data_lancamento, estado, instituicao, estoque, endereco_livro) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
const editarLivro = "UPDATE livros SET edicao = $1, estado = $2, instituicao = $3 WHERE id = $4";
const cadastrarAdministrador = "INSERT INTO administrador (nome, email, usuario, senha) VALUES ($1, $2, $3, $4)";
const editarAdministrador = "UPDATE administrador SET nome = $1, email = $2, senha = $3 WHERE id = $4";
const verificarNome = "SELECT * FROM instituicoes WHERE nome = $1";
const verificarAdministrador = "SELECT * FROM administrador WHERE email = $1 OR usuario = $2"


module.exports = {
    listarInstituicoes,
    verificarInstituicao,
    cadastrarInstituicao,
    listarLivros,
    cadastrarLivro,
    encontrarLivro,
    cadastrarAdministrador,
    editarAdministrador,
    editarLivro,
    verificarAdministrador,
    verificarNome,
}