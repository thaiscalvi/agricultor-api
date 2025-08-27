import express from "express";
import { atualizarProdutoPorId, createOneProdutoAgricola, deletarProdutoPorId, findAllProdutoAgricola, findProdutoPorId } from "../controllers/produtoAgricolaControllers.js";

export const produtoAgricolaRouter = express.Router()

produtoAgricolaRouter.get("/", findAllProdutoAgricola)
produtoAgricolaRouter.post("/", createOneProdutoAgricola)
produtoAgricolaRouter.delete("/:id", deletarProdutoPorId)
produtoAgricolaRouter.get("/:id", findProdutoPorId)
produtoAgricolaRouter.put("/:id", atualizarProdutoPorId)