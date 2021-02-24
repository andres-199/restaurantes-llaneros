import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript'
import { Direccion } from '../direcciones/direcciones.entity'
import { Tercero } from '../terceros/terceros.entity'

@Table({
  schema: 'public',
  tableName: 'restaurantes'
})
export class Restaurant extends Model<Restaurant> {
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

  @Column
  imagen: string

  @HasMany(() => Tercero, { as: 'Personal', foreignKey: 'restaurante_id' })
  Personal: Tercero[]
}
