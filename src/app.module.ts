import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UserModule } from './user/user.module.js';
import { Module } from './user/mudules/.module.js';
import { UserModule } from './mudules/user/user.module.js';
import { UserController } from './contollers/user/user.controller.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'my-dashboard',
    }),
    UserModule,
    Module,
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
