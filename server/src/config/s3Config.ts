import multerS3 from "multer-s3";
import env from "./env";
import { PutObjectCommand, S3Client} from "@aws-sdk/client-s3";
import { v4 as uuid } from "uuid";
const {
  DO_S3_REGION,
  DO_S3_ENDPOINT,
  DO_S3_NAME,
  AWS_ACCESS_KEY,
  AWS_SECRET_ACCESS_KEY
} = env;

if(!AWS_ACCESS_KEY || !AWS_SECRET_ACCESS_KEY) {
  throw new Error("Key not provided")
}

export const s3Config = async (files: any) => {
      let s3Client = new S3Client({
        region: "sgp1",
        endpoint: DO_S3_ENDPOINT,
        credentials:{
          accessKeyId: AWS_ACCESS_KEY,
          secretAccessKey: AWS_SECRET_ACCESS_KEY
        }
      });
      
      const params = files.map((file: any) => {
        return {
          Bucket: DO_S3_NAME,
          Key: `uploads/${uuid()}-${file.originalname}`,
          Body: file.buffer,
          ACL: "public-read"
        };
      });
      
      console.log(params);
      

      return await Promise.all(
        params.map((param: any) => s3Client.send(new PutObjectCommand(param)))
      );
    };


