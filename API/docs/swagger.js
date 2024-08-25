const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });

const doc = {
  info: {
    version: "1.0.0",
    title: "Gerenciador-de-Viajem.API",
    description: "Description",
  },
  host: "localhost:5000",
};

const outputFile = "./swagger.json";
const routes = ["../routes/userRoute.js"];

swaggerAutogen(outputFile, routes, doc).then(() => {
  require("./app.js");
});
