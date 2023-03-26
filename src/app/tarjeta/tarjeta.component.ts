import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ITarjeta } from '../entities/tarjeta';
import { TarjetaHttpServiceService } from '../services/tarjeta-http-service.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css'],
})
export class TarjetaComponent implements OnInit {
  tarjetas: any;
  constructor(private tarjetaHttpService: TarjetaHttpServiceService) {}
  ngOnInit(): void {
    this.getTarjeta();
  }
  getTarjeta() {
    this.tarjetaHttpService.getTarjeta().subscribe((data) => {
      this.tarjetas = data.listado;
    });
  }
  getEventValue($event: any): string {
    return $event.target.value;
  }
}
