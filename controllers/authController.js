import { StatusCodes } from "http-status-codes";
import User from "../models/userModel.js";
import bycrypt from "bcryptjs";
import { checkPassword, createHash } from "../utils/passwordUtils.js";
import { UnauthorizedError } from "../errors/customErrors.js";
import { createJwt } from "../utils/jwt.js";

export const registerUser = async (req, res) => {
  const firstAccount = (await User.countDocuments()) === 0;
  req.body.role = firstAccount ? "admin" : "user";

  const hashedPassword = await createHash(req.body.password);
  req.body.password = hashedPassword;
  const user = await User.create(req.body);
  res
    .status(StatusCodes.CREATED)
    .json({ message: "User successfully created" });
};

export const loginUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const validUser =
    user && (await checkPassword(req.body.password, user.password));
  if (!validUser) throw new UnauthorizedError("invalid credentials");

  const token = createJwt({ userId: user._id, role: user.role });

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 3600 * 24 * 7),
  });

  res.status(StatusCodes.CREATED).json({ msg: "user logged in" });
};

export const logout = (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out!" });
};
