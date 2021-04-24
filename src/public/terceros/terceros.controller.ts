import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Redirect
} from '@nestjs/common'
import { TerceroCreate } from './tercero-create.interface'
import { TercerosService } from './terceros.service'

@Controller()
export class TercerosController {
  constructor(private service: TercerosService) {}
  @Post()
  async create(@Body() data: TerceroCreate) {
    return await this.service.create(data)
  }

  @Get('buscar')
  async search(@Query() param: string) {
    return await this.service.search(param['value'])
  }

  @Get(':id/perfil')
  getPerfil(@Param('id') terceroId: number) {
    return this.service.getPerfil(terceroId)
  }

  @Get(':id/ordenes')
  getOrdenes(@Param('id') terceroId: number) {
    return this.service.getOrdenes(terceroId)
  }

  @Get(':id/reservas')
  getReservas(@Param('id') terceroId: number) {
    return this.service.getReservas(terceroId)
  }

  @Get(':id/compras')
  getCompras(@Param('id') terceroId: number) {
    return this.service.getCompras(terceroId)
  }

  @Delete(':id/reservas/:reservaId')
  deleteReserva(@Param('reservaId') reservaId: number) {
    return this.service.deleteReserva(reservaId)
  }
}
