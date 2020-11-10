import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  BelongsTo
} from 'sequelize-typescript'
import { DetalleVenta } from '../detalle-ventas/detalle-ventas.entity'
import { Restaurant } from '../restaurantes/restaurantes.entity'
import { RestauranteMetodoPago } from '../restaurantes-metodos-pago/restaurantes-metodos-pago.entity'
import { Tercero } from '../terceros/terceros.entity'

@Table({
  schema: 'public',
  tableName: 'ventas'
})
export class Venta extends Model<Venta> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'id'
  })
  id: number

  @Column
  tercero_id: number

  @Column
  valor: number

  @Column
  fecha: Date

  @Column
  restaurante_id: number

  @Column
  restaurante_metodo_pago_id: number

  @Column
  soporte_pago: string

  @Column
  valida: boolean

  @Column
  createdAt: Date

  @Column
  updatedAt: Date

  @BelongsTo(() => Restaurant, {
    foreignKey: 'restaurante_id',
    as: 'Restaurant'
  })
  Restaurant: Restaurant

  @BelongsTo(() => RestauranteMetodoPago, {
    foreignKey: 'restaurante_metodo_pago_id',
    as: ''
  })
  RestauranteMetodoPago: RestauranteMetodoPago

  @BelongsTo(() => Tercero, { foreignKey: 'tercero_id', as: 'Tercero' })
  Tercero: Tercero

  @HasMany(() => DetalleVenta, { as: 'DetalleVenta', foreignKey: 'venta_id' })
  DetalleVenta: DetalleVenta[]
}
