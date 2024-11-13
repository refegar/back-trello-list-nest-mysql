import { Test, TestingModule } from '@nestjs/testing';
import { OrdersUpdaterServiceService } from './orders-updater-service.service';

describe('OrdersUpdaterServiceService', () => {
  let service: OrdersUpdaterServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdersUpdaterServiceService],
    }).compile();

    service = module.get<OrdersUpdaterServiceService>(OrdersUpdaterServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
