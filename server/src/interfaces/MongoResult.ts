import { Document } from "mongoose";

interface MongoResult extends Document {
    _doc: any;
}

export default MongoResult;
