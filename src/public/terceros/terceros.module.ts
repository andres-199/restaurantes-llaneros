import { CommonFunctionsController } from '../../common/common-functions.controller'
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { TercerosMiddleware } from './terceros.middleware'
import { CommonModule } from '../../common/common.module'
import { TercerosController } from './terceros.controller'
import { TercerosService } from './terceros.service';

@Module({
  imports: [CommonModule],
  controllers: [TercerosController, CommonFunctionsController],
  providers: [TercerosService]
})
export class TercerosModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TercerosMiddleware).forRoutes('terceros')
  }
}
