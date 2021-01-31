import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { UsuariosMiddleware } from './usuarios.middleware'
import { CommonModule } from '../../common/common.module'

@Module({
  imports: [CommonModule],
  controllers: []
})
export class UsuariosModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UsuariosMiddleware).forRoutes('usuarios')
  }
}
