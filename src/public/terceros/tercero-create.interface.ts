import { Usuario } from '../usuarios/usuario.interface'

export interface TerceroCreate {
  nombre?: string
  apellido?: string
  email?: string
  identificacion?: string
  restaurante_id?: number
  telefono?: string
  Usuario?: Usuario
}
