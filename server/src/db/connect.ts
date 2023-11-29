const mongoose = require("mongoose");
import env from "../config/env";
const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_IP, MONGO_PORT, MONGO_DB_NAME } =
    env;

const connectUri = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/${MONGO_DB_NAME}?authSource=admin`;

const connectMongoDB = async () => {
    await mongoose.connect(connectUri);
    console.log("Successfully connected to MongoDB!");
};

export { connectMongoDB, connectUri };
