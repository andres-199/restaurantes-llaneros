import { Table, Model, Column, DataType, BelongsTo } from 'sequelize-typescript'
import { Mesa } from '../mesas/mesas.entity'
import { Reserva } from '../reservas/reservas.entity'

@Table({
	schema: 'public',
	tableName: 'reservas_mesas',
})

export class ReservasMesa extends Model<ReservasMesa> {

	@Column({
  	type: DataType.INTEGER,
  	autoIncrement: true,
  	primaryKey: true,
  	unique: true,
  	field: 'id',
	})
	id: number



  @Column
	mesa_id: number

  @Column
	reserva_id: number

  @Column
	createdAt: Date

  @Column
	updatedAt: Date


	@BelongsTo(() => Mesa, { foreignKey: 'mesa_id', as: 'Mesa'})
	Mesa: Mesa

	@BelongsTo(() => Reserva, { foreignKey: 'reserva_id', as: 'Reserva'})
	Reserva: Reserva



}
