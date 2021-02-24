import { Inject, Injectable } from '@nestjs/common'
import { Sequelize } from 'sequelize-typescript'
import { FindOptions } from 'sequelize/types'
import { Reserva } from './reserva.interface'

@Injectable()
export class ReservasService {
  constructor(@Inject('Sequelize') private sequelize: Sequelize) {}
}
