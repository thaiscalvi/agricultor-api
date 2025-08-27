import { ProdutoAgricola } from "../models/produtoAgricolaModels.js";

export async function findAllProdutoAgricolaService() {
  const data = await ProdutoAgricola.find();
  return data;
}

export async function createOneProdutoAgricolaService(parametroproduto) {
  const data = await ProdutoAgricola(parametroproduto).save();
  return data;
}

export async function deletarProdutoPorIdService(id) {
  const data = await ProdutoAgricola.findByIdAndDelete(id);
  return data;
}

export async function findProdutoPorIdService(id) {
  const data = await ProdutoAgricola.findById(id);
  return data;
}

export async function atualizarProdutoPorIdService(id, campos) {
  const data = await ProdutoAgricola.findByIdAndUpdate(id, campos, { new: true });
  return data;
}