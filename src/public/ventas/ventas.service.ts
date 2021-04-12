import { Inject, Injectable } from '@nestjs/common'
import { Sequelize } from 'sequelize-typescript'
import { FindOptions } from 'sequelize/types'

@Injectable()
export class VentasService {
  constructor(@Inject('Sequelize') private sequelize: Sequelize) {}

  findAll() {
    const { Venta } = this.sequelize.models
    const options: FindOptions = {}
    options.include = [
      'Tercero',
      { association: 'DetalleVenta', include: ['Producto'] }
    ]
    return Venta.findAll(options)
  }
}
