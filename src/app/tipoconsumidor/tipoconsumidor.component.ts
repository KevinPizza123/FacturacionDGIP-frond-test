import { Component, OnInit } from '@angular/core';
import { TipoconsumidorService } from '../services/tipoconsumidor.service';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { ListadoDTO } from 'src/app/Dto/TipoConsumidor.dto';

@Component({
  selector: 'app-tipoconsumidor',
  templateUrl: './tipoconsumidor.component.html',
  styleUrls: ['./tipoconsumidor.component.css'],
})
export class TipoconsumidorComponent implements OnInit {
  items: MenuItem[] = [];
  activeItem!: MenuItem;
  activeItem2!: MenuItem;

  listado: ListadoDTO[] = []; //poner

  constructor(private tipoconsumidorService: TipoconsumidorService) {}

  ngOnInit(): void {
    this.getTiposConsumidor();
  }

  getTiposConsumidor() {
    this.tipoconsumidorService.getListado().subscribe(data => {
      this.listado = data;
    });
  }

  eliminarTipoConsumidor(id: number): void {
    this.tipoconsumidorService.eliminarTipoConsumidor(id).subscribe((data) => {
      if (data && data) {
        this.listado = data;
      }
      this.getTiposConsumidor();
    });
  } 

  getEventValue($event: any): string {
    return $event.target.value;
  }
}
