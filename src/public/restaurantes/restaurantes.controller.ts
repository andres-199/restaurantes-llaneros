import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
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

  @Delete(':id/personal/:terceroId')
  async removePeople(
    @Param('id') restauranteId: number,
    @Param('terceroId') terceroId: number
  ) {
    return await this.restauranteService.removePeople(restauranteId, terceroId)
  }
}
