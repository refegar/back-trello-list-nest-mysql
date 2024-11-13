import { Test, TestingModule } from '@nestjs/testing';
import { OrdersRetrieverServiceService } from './orders-retriever-service.service';

describe('OrdersRetrieverServiceService', () => {
  let service: OrdersRetrieverServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdersRetrieverServiceService],
    }).compile();

    service = module.get<OrdersRetrieverServiceService>(OrdersRetrieverServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
