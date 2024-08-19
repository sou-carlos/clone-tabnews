//next automaticamente cria rota publica /api/v1/status
//next injeta objeto de request e response

import database from "/infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as soma;");
  console.log(result.rows);

  response.status(200).json({
    mensagem: "Tudo certo com o endpoint, bão demais",
  });
}

export default status;
