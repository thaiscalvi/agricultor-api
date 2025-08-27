import { Agricultor } from "../models/agricultorModels.js";

export async function findAllService() {
  const data = await Agricultor.find();
  const newData = data.map( e => ({
    id: e._id,
    nomeCompleto: e.fullName, 
    dataNascimento: e.birthDate,
    telefone: e.phone,
    ativo: e.active,
  }))   
  return newData
}

export async function createOneService(parametroagricultor) {
  const data = await Agricultor(parametroagricultor).save();
  return data;
}

export async function deletarPorIdService(parametroid) {
  const data = await Agricultor.findByIdAndDelete(parametroid)
  return data;
}

export async function findByIdService(id) {
  const data = await Agricultor.findById(id);
  return data;
}

export async function atualizarPorIdService(id, campos) {
  const data = await Agricultor.findByIdAndUpdate(id, campos, { new: true });
  return data;
}



