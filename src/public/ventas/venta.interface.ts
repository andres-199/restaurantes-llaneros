import { MetodoPago } from '../metodos-pago/metodo-pago.interface'

export interface Venta {
  id?: number
  tercero_id?: number
  valor?: number
  fecha?: Date
  restaurante_id?: number
  soporte_pago?: JSON
  valida?: boolean
  rechazada?: boolean
  direccion_entrega?: JSON
  metodo_pago?: MetodoPago
}
