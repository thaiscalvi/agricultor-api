import mongoose from "mongoose";

export async function findAll() {
  const data = await Agricultor.find();
  console.log(data);
}

export async function createOne(parametroagricultor) {
  const data = await Agricultor().save();
  console.log(data);
}

export async function deletarPorId(parametroid) {
  const data = await Agricultor.findByIdAndDelete()
  console.log('Documento deletado:', data )
}
