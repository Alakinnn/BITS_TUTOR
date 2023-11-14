
import multer from "multer"
import multerS3 from "multer-s3"
import env from "../config/env"
import { S3Client } from "@aws-sdk/client-s3";
import { fromEnv } from "@aws-sdk/credential-providers"
import {v4 as uuid} from "uuid"
const {DO_S3_REGION, DO_S3_ENDPOINT, DO_S3_NAME} = env


const S3 = new S3Client(
  {
    region: DO_S3_REGION,
    credentials: fromEnv(),
    endpoint: DO_S3_ENDPOINT
  }
)


export const upload = multer ({
  storage: multerS3({
    s3: S3,
    bucket: DO_S3_NAME,
    acl: "public-read",
    key: function (req, file, cb) {
        cb(null, `${uuid()}-${file.originalname}`)
    }
  })
})
