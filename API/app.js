const express = require("express");
const database = require("./config/db"); // Certifique-se de que o caminho está correto
const userRoutes = require("./routes/userRoute");
const cors = require("cors");
const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/swagger.json");

// Configuração do Swagger UI
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    explorer: true,
  })
);

// Conectar ao banco de dados
database
  .authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Error connecting to database:", err));

// Middleware para JSON
app.use(express.json());

//Configurando o cors
app.use(cors({ Credential: true, origin: "http://localhost:3000" }));

//Pasta publica para imagens
app.use(express.static("public"));

// Definir rotas
app.use("/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// Sincronizar o banco de dados (opcional)
// (async () => {
//   try {
//     await database.sync({ alter: true }); // Use { force: true } only for development
//     console.log("Database synchronized successfully.");
//   } catch (error) {
//     console.error("Error synchronizing database:", error);
//   }
// })();
