import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name }: User) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "ALREADY_EXISTS";
  const passHash = await encrypt(password); // Encrypt password
  const registerNewUser = await UserModel.create({
    email,
    password: passHash,
    name,
  });

  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) return "NOT_FOUND_USER";

  const passwordHash = checkIs.password; // Get password hash
  const isCorrect = await verified(password, passwordHash); // Compare password

  if (!isCorrect) return "INCORRECT_PASSWORD";

  const token = generateToken(checkIs.email); // Generate token
  const data = {
    token,
    user: checkIs,
  };

  return data;
};

export { registerNewUser, loginUser };
