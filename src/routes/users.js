import { getAllUsers } from "../controllers/users.js";

export default (router) => {
    router.get("/users", getAllUsers);
}