import { Test, TestingModule } from '@nestjs/testing';
import { OrdersUpdaterServiceController } from './orders-updater-service.controller';

describe('OrdersUpdaterServiceController', () => {
  let controller: OrdersUpdaterServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersUpdaterServiceController],
    }).compile();

    controller = module.get<OrdersUpdaterServiceController>(OrdersUpdaterServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
