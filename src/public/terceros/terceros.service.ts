import { HttpException, Inject, Injectable } from '@nestjs/common'
import { Sequelize } from 'sequelize-typescript'
import { CreateOptions } from 'sequelize/types'
import { ErrorResponse } from 'src/interfaces/error-response.interface'
import { _Response } from 'src/interfaces/response.interface'

@Injectable()
export class TercerosService {
  constructor(@Inject('Sequelize') private sequelize: Sequelize) {}

  create(data) {
    const { Tercero } = this.sequelize.models
    const options: CreateOptions = {}
    options.include = ['Usuario']

    return Tercero.create(data)
      .then(this.composeCreateResponse)
      .catch(e => {
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
}
