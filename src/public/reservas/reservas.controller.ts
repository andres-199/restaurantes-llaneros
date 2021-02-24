import { Body, Controller, Post } from '@nestjs/common'
import { Reserva } from './reserva.interface'
import { ReservasService } from './reservas.service'

@Controller()
export class ReservasController {
  constructor(private reservasService: ReservasService) {}
}
