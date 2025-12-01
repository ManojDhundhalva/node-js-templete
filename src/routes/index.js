import express from "express";

import users from "./users.js";

const router = express.Router();

export default () => {
    users(router);
    return router;
}