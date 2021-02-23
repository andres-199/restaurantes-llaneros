import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { Mesa } from '../mesas/interfaces/mesa.interface'
import { MesasConfig } from '../mesas/interfaces/mesas-config.interface'
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

  @Put(':id/productos')
  async updateProduct(
    @Param('id') restauranteId: number,
    @Body() producto: Producto
  ) {
    return await this.restauranteService.updateProduct(restauranteId, producto)
  }

  @Delete(':id/productos/:productoId')
  async deleteProduct(
    @Param('id') restauranteId: number,
    @Param('productoId') productoId: number
  ) {
    return await this.restauranteService.deleteProduct(
      restauranteId,
      productoId
    )
  }

  @Delete(':id/personal/:terceroId')
  async removePeople(
    @Param('id') restauranteId: number,
    @Param('terceroId') terceroId: number
  ) {
    return await this.restauranteService.removePeople(restauranteId, terceroId)
  }

  @Get(':id/mesas')
  async getMesas(@Param('id') restauranteId: number) {
    return await this.restauranteService.getMesas(restauranteId)
  }

  @Post(':id/mesas-multiple')
  async createMesas(
    @Param('id') restauranteId: number,
    @Body() mesasConfig: MesasConfig
  ) {
    return await this.restauranteService.createMesas(restauranteId, mesasConfig)
  }

  @Put(':id/mesas')
  async updateMesa(@Param('id') restauranteId: number, @Body() mesa: Mesa) {
    return await this.restauranteService.updateMesa(restauranteId, mesa)
  }

  @Post(':id/mesas')
  async createMesa(@Param('id') restauranteId: number, @Body() mesa: Mesa) {
    return await this.restauranteService.createMesa(restauranteId, mesa)
  }

  @Delete(':id/mesas/:mesaId')
  async deleteMesa(
    @Param('mesaId') mesaId: number,
    @Param('id') restauranteId: number
  ) {
    return await this.restauranteService.deleteMesa(mesaId, restauranteId)
  }

  @Get(':id')
  async findById(@Param('id') restauranteId: number) {
    return await this.restauranteService.findById(restauranteId)
  }
}
