//next automaticamente cria rota publica /api/v1/status
//next injeta objeto de request e response

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  response.status(200).json({
    updated_at: updatedAt,
  });
}

export default status;
