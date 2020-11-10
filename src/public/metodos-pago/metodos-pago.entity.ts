import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript'
import {  } from '../restaurantes-metodos_pago/restaurantes-metodos_pago.entity'

@Table({
	schema: 'public',
	tableName: 'metodos_pago',
})

export class  extends Model<> {

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



  @HasMany(() => , { as: '', foreignKey: 'metodo_pago_id' })
	: []


}
