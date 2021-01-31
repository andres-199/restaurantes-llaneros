import { Body, Controller, Post } from '@nestjs/common'
import { TerceroCreate } from './tercero-create.interface'
import { TercerosService } from './terceros.service'

@Controller()
export class TercerosController {
  constructor(private service: TercerosService) {}
  @Post()
  async create(@Body() data: TerceroCreate) {
    return await this.service.create(data)
  }
}
