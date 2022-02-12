import { S3 } from "aws-sdk";
import fs from "fs";
import mime from "mime";
import path from "path";

import upload from "@config/upload";

import { IStorageProvider } from "../IStorageProvider";

class S3StorageProvider implements IStorageProvider {
  private client: S3;

  constructor() {
    this.client = new S3({
      region: process.env.AWS_REGION,
    });
  }
  async saveFile(file: string): Promise<string> {
    const originalName = path.resolve(upload.tmpFolder, file);
    const fileContent = await fs.promises.readFile(originalName);
    const ContentType = mime.getType(originalName);

    await this.client
      .putObject({
        Bucket: process.env.AWS_BUCKET,
        Key: file,
        ACL: "public-read",
        Body: fileContent,
        ContentType,
      })
      .promise();

    await fs.promises.unlink(originalName);

    return file;
  }
  async deleteFile(file: string): Promise<void> {
    await this.client
      .deleteObject({
        Bucket: process.env.AWS_BUCKET,
        Key: file,
      })
      .promise();
  }
}

export { S3StorageProvider };
