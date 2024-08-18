//next automaticamente cria rota publica /api/v1/status
//next injeta objeto de request e response
function status(request, response) {
  response.status(200).json({
    mensagem: "Tudo certo com o endpoint, bão demais",
  });
}

export default status;
