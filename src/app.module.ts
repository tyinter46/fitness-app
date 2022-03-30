import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [AuthModule, CustomerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
