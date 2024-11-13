import { Test, TestingModule } from '@nestjs/testing';
import { OrdersRetrieverServiceController } from './orders-retriever-service.controller';

describe('OrdersRetrieverServiceController', () => {
  let controller: OrdersRetrieverServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersRetrieverServiceController],
    }).compile();

    controller = module.get<OrdersRetrieverServiceController>(OrdersRetrieverServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
