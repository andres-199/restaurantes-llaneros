import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  BelongsTo
} from 'sequelize-typescript'
import { Venta } from '../ventas/ventas.entity'
import { MetodoPago } from '../metodos-pago/metodos-pago.entity'
import { Restaurant } from '../restaurantes/restaurantes.entity'

@Table({
  schema: 'public',
  tableName: 'restaurantes_metodos_pago'
})
export class RestauranteMetodoPago extends Model<RestauranteMetodoPago> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'id'
  })
  id: number

  @Column
  metodo_pago_id: number

  @Column
  restaurante_id: number

  @Column
  numero_cuenta: string

  @Column
  detalle: string

  @Column
  createdAt: Date

  @Column
  updatedAt: Date

  @BelongsTo(() => MetodoPago, {
    foreignKey: 'metodo_pago_id',
    as: 'MetodoPago'
  })
  MetodoPago: MetodoPago

  @BelongsTo(() => Restaurant, {
    foreignKey: 'restaurante_id',
    as: 'Restaurant'
  })
  Restaurant: Restaurant

  @HasMany(() => Venta, {
    as: 'Venta',
    foreignKey: 'restaurante_metodo_pago_id'
  })
  Venta: Venta[]
}
