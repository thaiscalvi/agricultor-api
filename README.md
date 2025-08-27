# 🌱 Agricultor API

API REST para cadastro e gestão de **agricultores**, construída com **Node.js**, **Express** e **Mongoose** (MongoDB Atlas), seguindo a arquitetura **MSC (Model–Service–Controller)**.

---

## ✨ Funcionalidades
- Criar novo agricultor
- Listar todos os agricultores
- Buscar agricultor por **ID**
- Atualizar dados de um agricultor
- Deletar agricultor por **ID**

---

## 🧱 Stack utilizada
- **Runtime:** Node.js
- **Framework:** Express
- **ODM:** Mongoose
- **Banco de dados:** MongoDB Atlas
- **Arquitetura:** MSC (Model, Service, Controller)
- **Testes de rotas:** FlashPost / Insomnia

---

## 📁 Estrutura de pastas
```text
/controllers
  agricultorControllers.js
/models
  agricultorModels.js
/routes
  agricultorRoutes.js
/services
  agricultorService.js
index.mjs
.env
```

---

## 🔌 Endpoints

Base URL: `http://localhost:3000/agricultor`

| Método | Rota   | Descrição                    |
|-------:|--------|------------------------------|
| GET    | `/`    | Lista todos os agricultores  |
| GET    | `/:id` | Busca agricultor por ID      |
| POST   | `/`    | Cria um novo agricultor      |
| PUT    | `/:id` | Atualiza agricultor por ID   |
| DELETE | `/:id` | Deleta agricultor por ID     |

### Exemplo de body (POST/PUT)
```json
{
  "fullName": "Maria Silva",
  "cpf": "12345678900",
  "birthDate": "1993-10-05",
  "phone": "11999999999",
  "active": true
}
```

---

## ⚙️ Como rodar o projeto

1. **Clone o repositório**
   ```bash
   git clone https://github.com/<seu-usuario>/agricultor-api.git
   cd agricultor-api
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure o `.env`**
   ```env
   MONGO_URI=<sua string de conexão MongoDB Atlas>
   PORT=3000
   ```

4. **Scripts no `package.json`**
   ```json
   {
     "scripts": {
       "dev": "nodemon index.mjs",
       "start": "node index.mjs"
     }
   }
   ```

5. **Inicie o servidor**
   ```bash
   npm run dev
   ```
   O servidor estará disponível em: `http://localhost:3000`

---

## ✅ Status codes utilizados
- `200 OK` – requisição bem sucedida
- `201 Created` – recurso criado com sucesso
- `204 No Content` – deletado/atualizado sem corpo
- `400 Bad Request` – dados inválidos ou faltando
- `404 Not Found` – recurso não encontrado
- `500 Internal Server Error` – erro inesperado

---

## 📝 Licença
Este projeto está sob a licença MIT.
