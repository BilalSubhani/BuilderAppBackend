import { Schema, Document } from 'mongoose';

export interface File extends Document {
    filename: string;
    contentType: string;
    data: Buffer;
}

export const FileSchema = new Schema({
    filename: {type: String, required: true},
    contentType: {type: String, required: true},
    data: {type: Buffer, required: true}
});