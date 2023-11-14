const env = {
    // Need to be supplied when deployed to production
    MONGO_USERNAME: process.env.MONGO_USERNAME || "foo",
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || "bar",
    MONGO_DB_NAME: process.env.MONGO_DB_NAME || "test",

    // Can be kept default
    PORT: process.env.PORT || 3000, // Should not provide port directly since this is taken care of by NGINX
    MONGO_PORT: process.env.MONGO_PORT || 27017,    // Should just keep default port for MongoD
    MONGO_IP: process.env.MONGO_IP || "database",   // Using DNS to resolve service IP address

    // S3

    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY,
    AWS_SECRET_KEY_ID: process.env.AWS_SECRET_KEY,

    DO_S3_REGION: process.env.DO_REGION,
    DO_S3_NAME: process.env.DO_S3_NAME
    
}

export default env