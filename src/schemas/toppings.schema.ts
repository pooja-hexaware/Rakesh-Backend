import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type toppingsDocument = toppings & Document;

@Schema()
export class toppings {
   
   @Prop()
   tname: string; 
   
   @Prop()
   quantity: string; 
   
}

export const toppingsSchema = SchemaFactory.createForClass(toppings);