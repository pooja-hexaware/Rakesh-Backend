import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type menuDocument = menu & Document;

@Schema()
export class menu {
   
   @Prop()
   itemname: string; 
   
   @Prop()
   itemdesc: string; 
   
   @Prop()
   price: number; 

   @Prop()
   toppings: string[];
   
}

export const menuSchema = SchemaFactory.createForClass(menu);