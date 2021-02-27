import { Controller } from '@nestjs/common'
import { ProductosService } from './productos.service'

@Controller()
export class ProductosController {
  constructor(private productosService: ProductosService) {}
}
