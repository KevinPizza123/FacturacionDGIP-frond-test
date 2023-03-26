import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  activeItem!: MenuItem;
  activeItem2!: MenuItem;       

  ngOnInit(): void {
    this.items = [
      { label: 'Tarjeta', icon: 'pi pi-credit-card', routerLink: '/tarjeta' },
      {label: 'Tipo Concepto', icon: 'pi pi-th-large  ',routerLink: '/tipoconcepto'},
      {label: 'Tipo Consumidor',icon: 'pi pi-th-large', routerLink: '/tipoconsumidor'},
      { label: 'Pagos', icon: 'pi pi-wallet', routerLink: '/pagos' },
      { label: 'Bancos', icon: 'pi pi-money-bill', routerLink: '/bancos' },
      { label: 'Centro de Costos', icon: 'pi pi-calculator', routerLink: '/centro_costo' },
    ];
  }
}

