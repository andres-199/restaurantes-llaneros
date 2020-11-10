import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript'
import { Usuario } from '../usuarios/usuarios.entity'

@Table({
	schema: 'public',
	tableName: 'roles',
})

export class Rol extends Model<Rol> {

	@Column({
  	type: DataType.INTEGER,
  	autoIncrement: true,
  	primaryKey: true,
  	unique: true,
  	field: 'id',
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



  @HasMany(() => Usuario, { as: 'Usuario', foreignKey: 'rol_id' })
	Usuario: Usuario[]


}
