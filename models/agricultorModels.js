import mongoose from "mongoose";

const AgricultorSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  cpf: { type: String, required: true },
  birthDate: { type: Date, required: true },
  phone: { type: String, required: true },
  active: { type: Boolean, required: true },
});
export const Agricultor = mongoose.model("Agricultor", AgricultorSchema);