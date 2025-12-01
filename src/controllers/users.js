import { users } from "../data/users.js";

export const getAllUsers = async (req, res) => {
    return res.status(200).json(users);
};