import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { Producto } from '../productos/producto.interface'
import { TerceroCreate } from '../terceros/tercero-create.interface'
import { RestaurantesService } from './restaurantes.service'

@Controller()
export class RestaurantesController {
  constructor(private restauranteService: RestaurantesService) {}

  @Post('agregar-personal')
  async addPeople(@Body() tercero: TerceroCreate) {
    return await this.restauranteService.addPeople(tercero)
  }

  @Get()
  async findAll() {
    return await this.restauranteService.findAll()
  }

  @Get(':id/personal')
  async getStaff(@Param('id') restauranteId: number) {
    return await this.restauranteService.getStaff(restauranteId)
  }

  @Get(':id/productos')
  async getProducts(@Param('id') restauranteId: number) {
    return await this.restauranteService.getProducts(restauranteId)
  }

  @Post(':id/productos')
  async addProduct(
    @Param('id') restauranteId: number,
    @Body() producto: Producto
  ) {
    return await this.restauranteService.addProduct(restauranteId, producto)
  }

  @Delete(':id/personal/:terceroId')
  async removePeople(
    @Param('id') restauranteId: number,
    @Param('terceroId') terceroId: number
  ) {
    return await this.restauranteService.removePeople(restauranteId, terceroId)
  }
}
