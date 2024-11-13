import { 
  MiddlewareConsumer,
  Module,
  NestModule,
 } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { OrdersServiceController } from './orders-service/orders-service.controller';
import { OrdersServiceModule } from './orders-service/orders-service.module';
import { OrdersRetrieverServiceModule } from './orders-retriever-service/orders-retriever-service.module';
import { OrdersUpdaterServiceModule } from './orders-updater-service/orders-updater-service.module';
import { DevConfigService } from './common/providers/DevConfigService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedidos } from './orders-service/orders-service.entity';

const devConfig = { port: 3000 };
const proConfig = { port: 4000 };
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'redis',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      entities: [Pedidos],
      synchronize: true,
    }),
    OrdersServiceModule,
     OrdersRetrieverServiceModule,
      OrdersUpdaterServiceModule],
  controllers: [AppController],
  providers: [AppService,  {
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

    consumer.apply(LoggerMiddleware).forRoutes(OrdersServiceController); //option no 3
  }
}
