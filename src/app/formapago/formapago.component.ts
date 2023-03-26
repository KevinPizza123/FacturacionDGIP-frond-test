import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { FormaPagoDTO } from '../Dto/FormaPago.dto';
import { FormapagoService } from '../services/formapago.service';

@Component({
  selector: 'app-formapago',
  templateUrl: './formapago.component.html',
  styleUrls: ['./formapago.component.css']
})
export class FormapagoComponent implements OnInit {

  items: MenuItem[] = [];
  activeItem!: MenuItem;
  activeItem2!: MenuItem;

  formapago: FormaPagoDTO[] = []; //poner

  constructor(private formapagoService: FormapagoService) {}

  ngOnInit(): void {
    this.getListaFPago();
  }

  getListaFPago() {
    this.formapagoService.getFormaPago().subscribe(data => {
      this.formapago = data;
    });
  }

  eliminarFormaPago(id: number): void {
    this.formapagoService.eliminarFormaPago(id).subscribe((data) => {
      if (data && data) {
        this.formapago = data;
      }
      this.getListaFPago();
    });
  } 


  getEventValue($event: any): string {
    return $event.target.value;
  }
}
