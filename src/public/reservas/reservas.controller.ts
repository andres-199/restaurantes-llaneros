import { Controller } from '@nestjs/common'
import { ReservasService } from './reservas.service'

@Controller()
export class ReservasController {
  constructor(private reservasService: ReservasService) {}
}
