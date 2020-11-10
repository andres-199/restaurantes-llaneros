import { Table, Model, Column, DataType, HasMany, BelongsTo } from 'sequelize-typescript'
import { ReservasMesa } from '../reservas-mesas/reservas-mesas.entity'
import { Restaurant } from '../restaurantes/restaurantes.entity'

@Table({
	schema: 'public',
	tableName: 'mesas',
})

export class Mesa extends Model<Mesa> {

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
	restaurante_id: number

  @Column
	cupo: number

  @Column
	habilitada: boolean

  @Column
	createdAt: Date

  @Column
	updatedAt: Date


	@BelongsTo(() => Restaurant, { foreignKey: 'restaurante_id', as: 'Restaurant'})
	Restaurant: Restaurant


  @HasMany(() => ReservasMesa, { as: 'ReservasMesa', foreignKey: 'mesa_id' })
	ReservasMesa: ReservasMesa[]


}
