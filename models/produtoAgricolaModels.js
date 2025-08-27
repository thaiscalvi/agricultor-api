import mongoose from "mongoose";

const ProdutoAgricolaSchema = new mongoose.Schema({
  produto: { type: String, required: true },
  preco:   { type: Number, required: true },
  unidade: { type: String, required: true },
  peso:    { type: Number, required: true },
});

export const ProdutoAgricola = mongoose.model(
  "ProdutoAgricola", ProdutoAgricolaSchema);
