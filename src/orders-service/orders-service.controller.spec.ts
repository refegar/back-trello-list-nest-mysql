import { Test, TestingModule } from '@nestjs/testing';
import { OrdersServiceController } from './orders-service.controller';

describe('OrdersServiceController', () => {
  let controller: OrdersServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersServiceController],
    }).compile();

    controller = module.get<OrdersServiceController>(OrdersServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
