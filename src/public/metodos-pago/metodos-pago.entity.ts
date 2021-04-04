import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript'

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
  imagen: string

  @Column
  contra_entrega: boolean

  @Column
  createdAt: Date

  @Column
  updatedAt: Date
}
