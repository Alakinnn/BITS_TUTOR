import multer from "multer";
import multerS3 from "multer-s3";
import env from "../config/env";
import { S3Client} from "@aws-sdk/client-s3";
const { defaultProvider } = require("@aws-sdk/credential-provider-node");
import { v4 as uuid } from "uuid";
const {
  DO_S3_REGION,
  DO_S3_ENDPOINT,
  DO_S3_NAME,
  AWS_ACCESS_KEY,
  AWS_SECRET_KEY
} = env;

if(!AWS_ACCESS_KEY || !AWS_SECRET_KEY) {
  throw new Error("Key not provided")
}

let S3 = new S3Client({
  region: DO_S3_REGION,
  endpoint: DO_S3_ENDPOINT,
  credentials:{
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY
  }
});

export const s3Config = multerS3({
      s3: S3,
      bucket: DO_S3_NAME,
      acl: "public-read",
      // Key is name the uploaded file to S3
      key: function (req, file, cb) {
        cb(null, `${uuid()}-${file.originalname}`);
      },
    })

