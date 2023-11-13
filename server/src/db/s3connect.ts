import AWS from "aws-sdk";
import env_s3 from "../config/env_s3"
const { S3_ENDPOINT } = env_s3
import * as dotenv from "dotenv"
dotenv.config()

const s3Endpoint = new AWS.Endpoint(`${S3_ENDPOINT}`)

// Check Out The documentations if needed
const credentials = new AWS.SharedIniFileCredentials({profile: "default"})
const s3 = new AWS.S3({
  endpoint: s3Endpoint,
  credentials: credentials
})

