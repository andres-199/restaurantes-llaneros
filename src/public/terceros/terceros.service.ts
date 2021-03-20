import { HttpException, Inject, Injectable } from '@nestjs/common'
import sequelize = require('sequelize')
import { Sequelize } from 'sequelize-typescript'
import { CreateOptions, FindOptions } from 'sequelize/types'
import { ErrorResponse } from 'src/interfaces/error-response.interface'
import { _Response } from 'src/interfaces/response.interface'
import { Roles } from '../../interfaces/roles.enum'
import { TerceroCreate } from './tercero-create.interface'

@Injectable()
export class TercerosService {
  constructor(@Inject('Sequelize') private sequelize: Sequelize) {}

  create(data: TerceroCreate) {
    data.Usuario.rol_id = Roles.Cliente

    const { Tercero } = this.sequelize.models
    const options: CreateOptions = {}
    options.include = ['Usuario']
    console.log(data)

    return Tercero.create(data, options)
      .then(this.composeCreateResponse)
      .catch(e => {
        console.log('>>>>>>>>', e)
        const error: ErrorResponse = {}
        error.message =
          'Lo sentimos algo salio mal 🙄, verifica los datos, quisaz ya tengas una cuenta con el correo ingresado.'
        throw new HttpException(error, 500)
      })
  }

  private composeCreateResponse(data) {
    const response: _Response = {}
    response.data = data
    response.message =
      'Te has registrado en Restaurantes Llaneros, ingresa con tu correo y contraseña y disfruta todo lo que tenemos para ti.😊'
    return response
  }

  search(value: string) {
    value = `%${value}%`
    const { Tercero } = this.sequelize.models
    const options: FindOptions = {}
    const op = sequelize.Op
    const searchRule = { [op.iLike]: value }
    options.where = {
      [op.or]: {
        nombre: searchRule,
        email: searchRule
      }
    }

    return Tercero.findAll(options)
  }

  async getPerfil(terceroId: number) {
    const { Tercero, Restaurant } = this.sequelize.models
    const options: FindOptions = { include: ['Direcciones'] }
    const _tercero: any = await Tercero.findByPk(terceroId, options)
    const restauranteId = _tercero.restaurante_id
    const _restaurante = await Restaurant.findByPk(restauranteId)
    return { Tercero: _tercero, Restaurante: _restaurante }
  }

  getOrdenes(terceroId: number) {
    const { Carrito } = this.sequelize.models
    const options: FindOptions = {}
    options.where = { tercero_id: terceroId }
    options.include = [{ association: 'Producto', include: ['Restaurant'] }]
    return Carrito.findAll(options)
  }
}
