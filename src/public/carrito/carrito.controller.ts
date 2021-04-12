import { Body, Controller, Post } from '@nestjs/common'
import { CarritoService, Orden } from './carrito.service'

@Controller()
export class CarritoController {
  constructor(private carritoService: CarritoService) {}

  @Post('ordenar')
  createOrden(@Body() detalles: Orden) {
    return this.carritoService.createOrden(detalles)
  }
}
