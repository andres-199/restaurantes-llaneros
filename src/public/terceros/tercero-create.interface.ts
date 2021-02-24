import { Usuario } from '../usuarios/usuario.interface'

export interface TerceroCreate {
  id?: number
  nombre?: string
  apellido?: string
  email?: string
  identificacion?: string
  restaurante_id?: number
  Usuario?: Usuario
}
