import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { userModule } from "./modules/user.module";
import { menuModule } from "./modules/menu.module";
import { toppingsModule } from "./modules/toppings.module";
import { storesModule } from "./modules/stores.module";
import { cartModule } from "./modules/cart.module";

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), MongooseModule.forRoot(process.env.MONGODB_URL, {
    autoCreate: true,
  }),
        userModule,
        menuModule,
        toppingsModule,
        storesModule,
        cartModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
