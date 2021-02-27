import { Table, Model, Column, DataType, BelongsTo } from 'sequelize-typescript'
import { Categoria } from '../categorias/categorias.entity'
import { Producto } from '../productos/productos.entity'
import { Restaurant } from '../restaurantes/restaurantes.entity'
import { Tercero } from '../terceros/terceros.entity'

@Table({
  schema: 'public',
  tableName: 'imagenes'
})
export class Imagen extends Model<Imagen> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'id'
  })
  id: number

  @Column
  path: string

  @Column
  nombre: string

  @Column
  producto_id: number

  @Column
  createdAt: Date

  @Column
  updatedAt: Date

  @BelongsTo(() => Producto, { foreignKey: 'producto_id', as: 'Producto' })
  Producto: Producto
}
