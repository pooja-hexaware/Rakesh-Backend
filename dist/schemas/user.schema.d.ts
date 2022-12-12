import { Document } from 'mongoose';
export declare type userDocument = user & Document;
export declare class user {
    userid: string;
    password: string;
}
export declare const userSchema: import("mongoose").Schema<Document<user, any, any>, import("mongoose").Model<Document<user, any, any>, any, any>, undefined, {}>;
