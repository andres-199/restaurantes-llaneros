import {
  HttpException,
  Inject,
  Injectable,
  UnauthorizedException
} from '@nestjs/common'
import { Sequelize } from 'sequelize-typescript'
import { FindOptions, UpdateOptions } from 'sequelize/types'
import { Roles } from '../../interfaces/roles.enum'
import { Producto } from '../productos/producto.interface'
import { TerceroCreate } from '../terceros/tercero-create.interface'
import { Usuario } from '../usuarios/usuario.interface'

@Injectable()
export class RestaurantesService {
  constructor(@Inject('Sequelize') private sequelize: Sequelize) {}

  addPeople(tercero: TerceroCreate) {
    const { Tercero, Usuario } = this.sequelize.models

    return this.sequelize.transaction(async transaction => {
      const options: UpdateOptions = { where: { id: tercero.id } }
      options.transaction = transaction
      await Tercero.update(tercero, options)

      options.where = { tercero_id: tercero.id }
      const usuario: Usuario = { rol_id: Roles.Restaurante }
      await Usuario.update(usuario, options)

      return { message: 'El usuario se agregó correctamente.' }
    })
  }

  findAll() {
    const { Restaurant } = this.sequelize.models
    const options: FindOptions = {}
    options.include = ['Personal']
    return Restaurant.findAll(options).then(restaurantes => {
      return restaurantes.map((restaurante: any) => {
        restaurante = restaurante.toJSON()
        restaurante.Personal = restaurante.Personal.map(
          persona => persona.nombre
        )
        return restaurante
      })
    })
  }

  getStaff(restauranteId: number) {
    const { Tercero } = this.sequelize.models
    const options: FindOptions = {}
    options.where = { restaurante_id: restauranteId }
    return Tercero.findAll(options)
  }

  removePeople(restauranteId: number, terceroId: number) {
    const { Tercero, Usuario } = this.sequelize.models

    return this.sequelize.transaction(async transaction => {
      const terceroResponse = await Tercero.findByPk(terceroId)
      const tercero: TerceroCreate = terceroResponse.toJSON()

      if (tercero.restaurante_id == restauranteId) {
        tercero.restaurante_id = null
        await terceroResponse.update(tercero)

        const options: UpdateOptions = {
          where: { tercero_id: tercero.id }
        }
        const usuario: Usuario = { rol_id: Roles.Cliente }
        await Usuario.update(usuario, options)

        return { message: 'El usuario se eliminó del restaurante.' }
      } else {
        throw new HttpException('El usuario no pertenece al restaurante', 401)
      }
    })
  }

  getProducts(restauranteId: number) {
    const { Producto } = this.sequelize.models
    const options: FindOptions = {}
    options.where = { restaurante_id: restauranteId }
    return Producto.findAll(options)
  }

  addProduct(restauranteId: number, producto: Producto) {
    producto.restaurante_id = restauranteId
    const { Producto } = this.sequelize.models
    return Producto.create(producto)
  }

  async updateProduct(restauranteId: number, producto: Producto) {
    const _producto = await this.getProductById(restauranteId, producto.id)
    if (!_producto) throw new UnauthorizedException()
    return await _producto.update(producto)
  }

  private async getProductById(restauranteId: number, productoId: number) {
    const { Producto } = this.sequelize.models
    const options: FindOptions = {
      where: { restaurante_id: restauranteId }
    }
    return await Producto.findByPk(productoId, options)
  }

  async deleteProduct(restauranteId: number, productoId: number) {
    const _producto = await this.getProductById(restauranteId, productoId)
    if (!_producto) throw new UnauthorizedException()
    return await _producto.destroy()
  }

  getMesas(restauranteId: number) {
    const { Mesa } = this.sequelize.models
    const options: FindOptions = {}
    options.where = { restaurante_id: restauranteId }
    return Mesa.findAll(options)
  }
}
