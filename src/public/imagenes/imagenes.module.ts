import { CommonFunctionsController } from '../../common/common-functions.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ImagenesMiddleware } from './imagenes.middleware';
import { CommonModule } from '../../common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [CommonFunctionsController],
})
export class ImagenesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ImagenesMiddleware).forRoutes('public/imagenes')
  }
}
