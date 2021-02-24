import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ProductosMiddleware } from './productos.middleware';
import { CommonModule } from '../../common/common.module';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController, ProductosController],
  providers: [ProductosService],
})
export class ProductosModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ProductosMiddleware).forRoutes('productos')
  }
}
