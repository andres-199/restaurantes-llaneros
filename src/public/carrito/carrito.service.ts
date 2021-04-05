import { Inject, Injectable } from '@nestjs/common'
import { Sequelize } from 'sequelize-typescript'
import { CreateOptions, DestroyOptions } from 'sequelize/types'
import { DetalleVenta } from '../detalle-ventas/detalle-venta.interface'
import { Venta } from '../ventas/venta.interface'
import { Carrito } from './carrito.interface'

export interface Orden {
  detalles: Carrito[]
  direccion_entrega: JSON
  metodo_pago: JSON
  fecha: Date
}

@Injectable()
export class CarritoService {
  constructor(@Inject('Sequelize') private sequelize: Sequelize) {}

  createOrden(orden: Orden) {
    return this.sequelize.transaction(async transaction => {
      const { Venta, DetalleVenta, Carrito } = this.sequelize.models
      const options: CreateOptions = { transaction }
      const venta = this.getVentaBody(orden)
      const _venta = await Venta.create(venta, options)
      const detalles = this.getDetalles(orden, _venta['id'])
      const _detalles = await DetalleVenta.bulkCreate(detalles, options)

      for (const carritoItem of orden.detalles) {
        const destroyOptions: DestroyOptions = { transaction }
        destroyOptions.where = { id: carritoItem.id }
        await Carrito.destroy(destroyOptions)
      }

      return { ..._venta.toJSON(), detalles: _detalles }
    })
  }

  private getVentaBody(orden: Orden) {
    const venta: Venta = {}
    venta.direccion_entrega = orden.direccion_entrega
    venta.metodo_pago = orden.metodo_pago
    venta.fecha = orden.fecha
    venta.restaurante_id = orden.detalles[0].Producto.restaurante_id
    venta.tercero_id = orden.detalles[0].tercero_id
    venta.valor = 0
    for (const detalle of orden.detalles) {
      venta.valor += detalle.cantidad * detalle.Producto.precio
    }
    return venta
  }

  private getDetalles(orden: Orden, ventaId: number) {
    const detalles: DetalleVenta[] = []
    for (const detalle of orden.detalles) {
      const _detalle: DetalleVenta = {}
      _detalle.cantidad = detalle.cantidad
      _detalle.producto_id = detalle.producto_id
      _detalle.valor_total = detalle.cantidad * detalle.Producto.precio
      _detalle.valor_unidad = detalle.Producto.precio
      _detalle.venta_id = ventaId
      detalles.push(_detalle)
    }
    return detalles
  }
}
