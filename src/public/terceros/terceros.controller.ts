import { Body, Controller, Post } from '@nestjs/common'
import { TercerosService } from './terceros.service'

@Controller()
export class TercerosController {
  constructor(private service: TercerosService) {}
  @Post()
  async create(@Body() data) {
    return await this.service.create(data)
  }
}
