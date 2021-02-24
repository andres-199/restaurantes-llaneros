import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  BelongsTo
} from 'sequelize-typescript'
import { DetalleVenta } from '../detalle-ventas/detalle-ventas.entity'
import { Categoria } from '../categorias/categorias.entity'
import { Restaurant } from '../restaurantes/restaurantes.entity'
import { Imagen } from '../imagenes/imagenes.entity'

@Table({
  schema: 'public',
  tableName: 'productos',
  defaultScope: { include: ['Imagenes'] }
})
export class Producto extends Model<Producto> {
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
  precio: number

  @Column
  restaurante_id: number

  @Column
  categoria_id: number

  @Column
  createdAt: Date

  @Column
  updatedAt: Date

  @BelongsTo(() => Categoria, { foreignKey: 'categoria_id', as: 'Categoria' })
  Categoria: Categoria

  @BelongsTo(() => Restaurant, {
    foreignKey: 'restaurante_id',
    as: 'Restaurant'
  })
  Restaurant: Restaurant

  @HasMany(() => DetalleVenta, {
    as: 'DetalleVenta',
    foreignKey: 'producto_id'
  })
  DetalleVenta: DetalleVenta[]

  @HasMany(() => Imagen, { foreignKey: 'producto_id', as: 'Imagenes' })
  Imagenes: Imagen[]
}
