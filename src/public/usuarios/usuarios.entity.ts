import { Table, Model, Column, DataType, BelongsTo } from 'sequelize-typescript'
import { Rol } from '../roles/roles.entity'
import { Tercero } from '../terceros/terceros.entity'

@Table({
	schema: 'public',
	tableName: 'usuarios',
})

export class Usuario extends Model<Usuario> {

	@Column({
  	type: DataType.INTEGER,
  	autoIncrement: true,
  	primaryKey: true,
  	unique: true,
  	field: 'id',
	})
	id: number



  @Column
	usuario: string

  @Column
	contrasena: string

  @Column
	rol_id: number

  @Column
	tercero_id: number

  @Column
	createdAt: Date

  @Column
	updatedAt: Date


	@BelongsTo(() => Rol, { foreignKey: 'rol_id', as: 'Rol'})
	Rol: Rol

	@BelongsTo(() => Tercero, { foreignKey: 'tercero_id', as: 'Tercero'})
	Tercero: Tercero



}
