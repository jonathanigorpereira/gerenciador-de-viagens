const UserRepository = require("../models/user");
const { hashPassword } = require("../utils/passwordEncrypt");

// Serviço para buscar todos os usuários
exports.getAllUsers = async () => {
  return UserRepository.findAll();
};

// Serviço para buscar um usuário por ID
exports.getUserById = async (id) => {
  return UserRepository.findByPk(id);
};

// Serviço para criar um novo usuário
exports.createUser = async (userData) => {
  // Verificar se o usuário já existe
  const existingUser = await UserRepository.findOne({
    where: { email: userData.email },
  });
  if (existingUser) {
    throw new Error("Usuário já cadastrado");
  }

  // Criptografar a senha
  const hashedPassword = hashPassword(userData.password);

  // Criar o novo usuário
  return UserRepository.create({
    name: userData.name,
    email: userData.email,
    password: hashedPassword,
  });
};
