import { 
  MiddlewareConsumer,
  Module,
  NestModule,
 } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { DevConfigService } from './common/providers/DevConfigService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisService } from './common/services/redis.service';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/user.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ListaModule } from './lista/lista.module';
import { Lista } from './lista/lista.entity';
import { ListaController } from './lista/lista.controller';
import { TarjetaModule } from './tarjeta/tarjeta.module';
import { Tarjeta } from './tarjeta/tarjeta.entity';
import { TarjetaController } from './tarjeta/tarjeta.controller';


const devConfig = { port: 3000 };
const proConfig = { port: 4000 };
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true, // Para que esté disponible en todo el proyecto
  }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'trello',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      entities: [User,Lista,Tarjeta],
      synchronize: true
    }),UsersModule,AuthModule, ListaModule, TarjetaModule],
  controllers: [AppController],
  providers: [AppService, RedisService, {
    provide: DevConfigService,
    useClass: DevConfigService,
  },
  {
    provide: 'CONFIG',
    useFactory: () => {
      return process.env.NODE_ENV === 'development' ? devConfig : proConfig;
    },
  },],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('songs'); // option no 1
    // consumer
    //   .apply(LoggerMiddleware)
    //   .forRoutes({ path: 'songs', method: RequestMethod.POST }); //option no 2

    consumer.apply(LoggerMiddleware).forRoutes(ListaController); //option no 3
    consumer.apply(LoggerMiddleware).forRoutes(TarjetaController); //option no 3

  }
}
