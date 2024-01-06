import bycrypt from "bcryptjs";

export const createHash = async (password) => {
  const salt = await bycrypt.genSalt(10);
  const hashedPassword = await bycrypt.hash(password, salt);
  return hashedPassword;
};

export const checkPassword = async (password, hashedPassword) => {
  return await bycrypt.compare(password, hashedPassword);
};
