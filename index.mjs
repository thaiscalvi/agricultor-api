import "dotenv/config";
import mongoose from "mongoose";
import express from "express"; 
import { agricultorRouter } from "./routes/agricultorRoutes.js";
import { produtoAgricolaRouter } from "./routes/produtoAgricolaRoutes.js";

export const app = express()

app.use(express.json())
app.use("/agricultor", agricultorRouter)
app.use("/produtoagricola", produtoAgricolaRouter)

const PORT = 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('🟢 Conectado ao MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err.message);
  });

// async function conection() {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("conectado com sucesso");
//     const collections = await mongoose.connection.db
//       .listCollections()
//       .toArray();

//     /* createOne({
//       fullName: "Thais",
//       cpf: '',
//       birthDate: "05/10/1993",
//       phone: 21988978034,
//       active: "true",
//     }) */

//     // deletarPorId('688cc5eeb6b68c738f49564b')

//     const data = await findAll();
//     console.log(data);

//     /* const data = await createOneProdutoAgricola({
//       preco: 5000,
//       unidade: "kg",
//       peso: 0,
//     });
//     console.log(data);*/

//     // const data = await findAllProdutoAgricola();
//     // console.log(data);

//     // const data = await findById('688d06c81a3109d398ffee2f');
//     // console.log(data);

//     // const data = await deletarProdutoPorId('689cdf25b5154e0aec5b870b');
//     // console.log(data);

//     // const data = await findProdutoPorId('689cdc9284106de2946f77cb');
//     // console.log(data);

//     // const data = await atualizarPorId("688d06c81a3109d398ffee2b", { fullName: "José Freitas", phone: "21999999999" });
//     // console.log(data);

//     // const data = await atualizarProdutoPorId("689cdc9284106de2946f77cb", { peso: 600 });
//     // console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// conection();
