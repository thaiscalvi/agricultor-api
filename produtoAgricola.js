import mongoose from "mongoose";

export async function findAllProdutoAgricola() {
  const data = await ProdutoAgricola.find();
  console.log(data);
}

export async function createOneProdutoAgricola(parametroproduto) {
  const data = await ProdutoAgricola().save();
  console.log(data);
}