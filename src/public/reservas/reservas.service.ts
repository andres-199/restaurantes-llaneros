import { Inject, Injectable } from '@nestjs/common'
import { Sequelize } from 'sequelize-typescript'

@Injectable()
export class ReservasService {
  constructor(@Inject('Sequelize') private sequelize: Sequelize) {}
}
