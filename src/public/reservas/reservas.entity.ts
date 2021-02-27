import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  BelongsTo
} from 'sequelize-typescript'
import { ReservasMesa } from '../reservas-mesas/reservas-mesas.entity'
import { Restaurant } from '../restaurantes/restaurantes.entity'
import { Tercero } from '../terceros/terceros.entity'

@Table({
  schema: 'public',
  tableName: 'reservas'
})
export class Reserva extends Model<Reserva> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'id'
  })
  id: number

  @Column
  fecha: Date

  @Column
  tercero_id: number

  @Column
  createdAt: Date

  @Column
  updatedAt: Date

  @Column
  restaurante_id: number

  @Column
  numero_mesas: number

  @BelongsTo(() => Restaurant, {
    foreignKey: 'restaurante_id',
    as: 'Restaurant'
  })
  Restaurant: Restaurant

  @BelongsTo(() => Tercero, { foreignKey: 'tercero_id', as: 'Tercero' })
  Tercero: Tercero

  @HasMany(() => ReservasMesa, { as: 'ReservasMesa', foreignKey: 'reserva_id' })
  ReservasMesa: ReservasMesa[]
}
