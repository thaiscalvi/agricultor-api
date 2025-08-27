import express from "express"; 
import { atualizarPorId, createOne, deletarPorId, findAll, findById } from "../controllers/agricultorControllers.js";

export const agricultorRouter = express.Router()

agricultorRouter.get("/", findAll)
agricultorRouter.post("/", createOne)
agricultorRouter.delete("/:id", deletarPorId)
agricultorRouter.get("/:id", findById )
agricultorRouter.put("/:id", atualizarPorId)
