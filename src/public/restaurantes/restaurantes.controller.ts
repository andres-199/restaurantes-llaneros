import { Body, Controller, Get, Post } from '@nestjs/common'
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
}
