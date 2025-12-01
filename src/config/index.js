import dotenv from "dotenv";

dotenv.config();

const config = {
    PORT: Number(process.env.PORT) || 8080,
};

export default config;