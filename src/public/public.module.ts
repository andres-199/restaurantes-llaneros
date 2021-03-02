import { Module } from '@nestjs/common'
import { CategoriasModule } from './categorias/categorias.module'
import { DetalleVentasModule } from './detalle-ventas/detalle-ventas.module'
import { DireccionesModule } from './direcciones/direcciones.module'
import { ImagenesModule } from './imagenes/imagenes.module'
import { MesasModule } from './mesas/mesas.module'
import { MetodosPagoModule } from './metodos-pago/metodos-pago.module'
import { ProductosModule } from './productos/productos.module'
import { ReservasModule } from './reservas/reservas.module'
import { ReservasMesasModule } from './reservas-mesas/reservas-mesas.module'
import { RestaurantesModule } from './restaurantes/restaurantes.module'
import { RestaurantesMetodosPagoModule } from './restaurantes-metodos-pago/restaurantes-metodos-pago.module'
import { RolesModule } from './roles/roles.module'
import { TercerosModule } from './terceros/terceros.module'
import { UsuariosModule } from './usuarios/usuarios.module'
import { VentasModule } from './ventas/ventas.module'
import { AuthModule } from './auth/auth.module'
import { CarritoModule } from './carrito/carrito.module'

@Module({
  imports: [
    CategoriasModule,
    DetalleVentasModule,
    DireccionesModule,
    ImagenesModule,
    MesasModule,
    MetodosPagoModule,
    ProductosModule,
    ReservasModule,
    ReservasMesasModule,
    RestaurantesModule,
    RestaurantesMetodosPagoModule,
    RolesModule,
    TercerosModule,
    UsuariosModule,
    VentasModule,
    AuthModule,
    CarritoModule
  ],
  providers: []
})
export class PublicModule {}
