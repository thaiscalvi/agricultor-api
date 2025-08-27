import {
  atualizarPorIdService,
  createOneService,
  deletarPorIdService,
  findAllService,
  findByIdService,
} from "../services/agricultorService.js";

export async function findAll(req, res) {
  const data = await findAllService();
  return res.json(data);
}

export async function createOne(req, res) {
  const data = req.body;
  if (
    !data.fullName ||
    !data.cpf ||
    !data.birthDate ||
    !data.phone ||
    !data.active
  ) {
    return res.json({ status: 400, msg: "Campos vazios" });
  }

  if (data.cpf === "") {
    return { status: 400, msg: "Cpf vazio" };
  }

  const result = await createOneService(data);
  return res.json(result);
}

export async function deletarPorId(req, res) {
  const { id } = req.params;
  const result = await deletarPorIdService(id);
  return res.json(result);
}

export async function findById(req, res) {
  const id = req.params.id;
  console.log(id);

  if (!id) {
    return res.json({ status: 400, msg: "ID vazio" });
  }

  const result = await findByIdService(id);
  return res.json(result);
}

export async function atualizarPorId(req, res) {
  const { id } = req.params;

  if (!id) {
    return res.json({ status: 400, msg: "ID vazio" });
  }

  const novosDados = req.body;
  const result = await atualizarPorIdService(id, novosDados);
  return res.json(result);
}
