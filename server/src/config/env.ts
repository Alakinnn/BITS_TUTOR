const env = {
    // Need to be supplied
    MONGO_USERNAME: process.env.MONGO_USERNAME,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    MONGO_DB_NAME: process.env.MONGO_DB_NAME,

    // JWT
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRY: process.env.JWT_EXPIRY,

    // S3
    DO_S3_REGION: process.env.DO_REGION || "SGP1",
    DO_S3_ENDPOINT:
        process.env.DO_ENDPOINT ||
        "https://sgp1.digitaloceanspaces.com",
    DO_S3_NAME: process.env.DO_S3_NAME || "finder-tutor",
    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,

    // Zoom
    // This is Zoom SDK credentials
    ZOOM_MEETING_SDK_KEY: process.env.ZOOM_MEETING_SDK_KEY,
    ZOOM_MEETING_SDK_SECRET: process.env.ZOOM_MEETING_SDK_SECRET,

    // This is API credentials
    ZOOM_S2S_ACCOUNT_ID: process.env.ZOOM_S2S_ACCOUNT_ID,
    ZOOM_S2S_CLIENT_ID: process.env.ZOOM_S2S_CLIENT_ID,
    ZOOM_S2S_CLIENT_SECRET: process.env.ZOOM_S2S_CLIENT_SECRET,
    ZOOM_OWNER_EMAIL: process.env.ZOOM_OWNER_EMAIL,

    // Can be kept default
    PORT: process.env.PORT || 3000, // Should not provide port directly since this is taken care of by NGINX
    MONGO_PORT: process.env.MONGO_PORT || 27017, // Should just keep default port for MongoD
    MONGO_IP: process.env.MONGO_IP || "database", // Using DNS to resolve service IP address
};

export default env;
