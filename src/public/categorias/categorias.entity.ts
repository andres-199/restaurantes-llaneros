import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript'
import { Imagen } from '../imagenes/imagenes.entity'

@Table({
  schema: 'public',
  tableName: 'categorias'
})
export class Categoria extends Model<Categoria> {
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
}
