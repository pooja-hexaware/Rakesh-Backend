import { Document } from 'mongoose';
export declare type cartDocument = cart & Document;
export declare class cart {
    coupon: string;
    price: number;
    itemname: string;
    totalprice: number;
}
export declare const cartSchema: import("mongoose").Schema<Document<cart, any, any>, import("mongoose").Model<Document<cart, any, any>, any, any>, undefined, {}>;
