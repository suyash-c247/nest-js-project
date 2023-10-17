import { Module } from '@nestjs/common';
import { userController } from './user/user.controller';

@Module({
  controllers: [userController],
})
export class AppModule {}
