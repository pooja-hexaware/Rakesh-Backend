import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type storesDocument = stores & Document;

@Schema()
export class stores {
   
   @Prop()
   storename: string; 
   
   @Prop()
   address: string; 
   
}

export const storesSchema = SchemaFactory.createForClass(stores);