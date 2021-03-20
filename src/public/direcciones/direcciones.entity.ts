import { Table, Model, Column, DataType } from 'sequelize-typescript'

@Table({
  schema: 'public',
  tableName: 'direcciones'
})
export class Direccion extends Model<Direccion> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'id'
  })
  id: number

  @Column
  direccion: string

  @Column
  telefono: string

  @Column
  nombre: string

  @Column
  principal: boolean

  @Column
  createdAt: Date

  @Column
  updatedAt: Date

  @Column
  tercero_id: number
}
