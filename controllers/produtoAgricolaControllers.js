import {
  atualizarProdutoPorIdService,
  createOneProdutoAgricolaService,
  deletarProdutoPorIdService,
  findAllProdutoAgricolaService,
  findProdutoPorIdService,
} from "../services/produtoAgricolaService.js";

export async function findAllProdutoAgricola(req, res) {
  const data = await findAllProdutoAgricolaService();
  return res.json(data);
}

export async function createOneProdutoAgricola(req, res) {
  const data = req.body;
  if (
    !data.produto ||
    !data.preco ||
    !data.unidade ||
    !data.peso
  ) {
    return { status: 400, msg: "Campos vazios" };
  }

  if (data.produto === "") {
    return { status: 400, msg: "Produto vazio" };
  }

  if (data.preco <= 0) {
    return { status: 400, msg: "Preço vazio" };
  }

  if (data.unidade === "") {
    return { status: 400, msg: "Unidade vazia" };
  }

  if (data.peso <= 0) {
    return { status: 400, msg: "Peso vazio" };
  }

  const result = await createOneProdutoAgricolaService(data);
  return res.json(result);
}

export async function deletarProdutoPorId(req, res) {
  const { id } = req.params;
  
  if (!id) {
    return { status: 400, msg: "Envie o id" };
  }

  const result = await deletarProdutoPorIdService(id);
  return res.json(result);
}

export async function findProdutoPorId(req, res) {
  const { id } = req.params;

  if (!id) {
    return { status: 400, msg: "Envie o id" };
  }

  const result = await findProdutoPorIdService(id);
  return res.json(result);
}

export async function atualizarProdutoPorId(req, res) {
  const { id } = req.params;

  if (!id) {
    return { status: 400, msg: "Envie o id" };
  }

  const novosDados = req.body;
  const result = await atualizarProdutoPorIdService(id, novosDados);
  return res.json(result);
}
