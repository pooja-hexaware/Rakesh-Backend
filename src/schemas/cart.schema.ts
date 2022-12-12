import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type cartDocument = cart & Document;

@Schema()
export class cart {
   
   @Prop()
   coupon: string; 
   
   @Prop()
   price: number; 
   
   @Prop()
   itemname: string; 
   
   @Prop()
   totalprice: number; 
   
}

export const cartSchema = SchemaFactory.createForClass(cart);