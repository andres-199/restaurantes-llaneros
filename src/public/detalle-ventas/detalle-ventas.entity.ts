import { Table, Model, Column, DataType, BelongsTo } from 'sequelize-typescript'
import { Producto } from '../productos/productos.entity'
import { Venta } from '../ventas/ventas.entity'

@Table({
	schema: 'public',
	tableName: 'detalle_ventas',
})

export class DetalleVenta extends Model<DetalleVenta> {

	@Column({
  	type: DataType.INTEGER,
  	autoIncrement: true,
  	primaryKey: true,
  	unique: true,
  	field: 'id',
	})
	id: number



  @Column
	venta_id: number

  @Column
	producto_id: number

  @Column
	valor_unidad: number

  @Column
	cantidad: number

  @Column
	valor_total: number

  @Column
	createdAt: Date

  @Column
	updatedAt: Date


	@BelongsTo(() => Producto, { foreignKey: 'producto_id', as: 'Producto'})
	Producto: Producto

	@BelongsTo(() => Venta, { foreignKey: 'venta_id', as: 'Venta'})
	Venta: Venta



}
