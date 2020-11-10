import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript'
import { RestauranteMetodoPago } from '../restaurantes-metodos-pago/restaurantes-metodos-pago.entity'

@Table({
  schema: 'public',
  tableName: 'metodos_pago'
})
export class MetodoPago extends Model<MetodoPago> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'id'
  })
  id: number

  @Column
  nombre: string

  @Column
  descripcion: string

  @Column
  createdAt: Date

  @Column
  updatedAt: Date

  @HasMany(() => RestauranteMetodoPago, {
    as: '',
    foreignKey: 'metodo_pago_id'
  })
  RestauranteMetodoPago: RestauranteMetodoPago[]
}
