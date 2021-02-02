import { Inject, Injectable } from '@nestjs/common'
import { Sequelize } from 'sequelize-typescript'
import { FindOptions, UpdateOptions } from 'sequelize/types'
import { Roles } from '../../interfaces/roles.enum'
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

      const response = { message: 'El usuario se agregó correctamente.' }
      return response
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
}
