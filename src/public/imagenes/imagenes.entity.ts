import { Table, Model, Column, DataType, BelongsTo } from 'sequelize-typescript'
import { Categoria } from '../categorias/categorias.entity'
import { Producto } from '../productos/productos.entity'
import { Restaurant } from '../restaurantes/restaurantes.entity'
import { Tercero } from '../terceros/terceros.entity'

@Table({
	schema: 'public',
	tableName: 'imagenes',
})

export class Imagen extends Model<Imagen> {

	@Column({
  	type: DataType.INTEGER,
  	autoIncrement: true,
  	primaryKey: true,
  	unique: true,
  	field: 'id',
	})
	id: number



  @Column
	path: string

  @Column
	nombre: string

  @Column
	propietario_id: number

  @Column
	createdAt: Date

  @Column
	updatedAt: Date


	@BelongsTo(() => Categoria, { foreignKey: 'propietario_id', as: 'Categoria'})
	Categoria: Categoria

	@BelongsTo(() => Producto, { foreignKey: 'propietario_id', as: 'Producto'})
	Producto: Producto

	@BelongsTo(() => Restaurant, { foreignKey: 'propietario_id', as: 'Restaurant'})
	Restaurant: Restaurant

	@BelongsTo(() => Tercero, { foreignKey: 'propietario_id', as: 'Tercero'})
	Tercero: Tercero



}
