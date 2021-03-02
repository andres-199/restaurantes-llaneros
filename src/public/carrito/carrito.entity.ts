import { Table, Model, Column, DataType, BelongsTo } from 'sequelize-typescript'
import { Producto } from '../productos/productos.entity'
import { Tercero } from '../terceros/terceros.entity'

@Table({
  schema: 'public',
  tableName: 'carrito'
})
export class Carrito extends Model<Carrito> {
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
  producto_id: number

  @Column
  cantidad: number

  @Column
  fecha: Date

  @Column
  createdAt: Date

  @Column
  updatedAt: Date

  @BelongsTo(() => Producto, { foreignKey: 'producto_id', as: 'Producto' })
  Producto: Producto

  @BelongsTo(() => Tercero, { foreignKey: 'tercero_id', as: 'Tercero' })
  Tercero: Tercero
}
