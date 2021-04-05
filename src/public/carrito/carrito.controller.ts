import { Body, Controller, Post } from '@nestjs/common'
import { Carrito } from './carrito.interface'
import { CarritoService } from './carrito.service'

@Controller()
export class CarritoController {
  constructor(private carritoService: CarritoService) {}

  @Post('ordenar')
  createOrden(@Body() detalles: Carrito[]) {
    return this.carritoService.createOrden(detalles)
  }
}
