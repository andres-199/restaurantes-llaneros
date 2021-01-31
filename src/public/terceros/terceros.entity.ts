import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  HasOne
} from 'sequelize-typescript'
import { Direccion } from '../direcciones/direcciones.entity'
import { Usuario } from '../usuarios/usuarios.entity'

@Table({
  schema: 'public',
  tableName: 'terceros'
})
export class Tercero extends Model<Tercero> {
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
  apellido: string

  @Column
  email: string

  @Column
  identificacion: string

  @Column
  createdAt: Date

  @Column
  updatedAt: Date

  @HasMany(() => Direccion, { as: 'Direccion', foreignKey: 'propietario_id' })
  Direccion: Direccion[]

  @HasOne(() => Usuario, { as: 'Usuario', foreignKey: 'tercero_id' })
  Usuario
}
