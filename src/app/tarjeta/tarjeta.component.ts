import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Tarjeta } from '../entities/tarjeta';
import { TarjetaHttpServiceService } from '../services/tarjeta-http-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarjetaDTO } from '../Dto/Tarjeta.dto';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css'],
})
export class TarjetaComponent implements OnInit {

  TarjetaForm: FormGroup;
  listadotarjeta: TarjetaDTO[] = []; //poner

  constructor(private TarjetaHttpServiceService: TarjetaHttpServiceService, private form: FormBuilder,) {
    {
      this.TarjetaForm = this.form.group({
        nombreTarjeta: ['', Validators.required],
        descTarjeta: ['', Validators.required],
        stateTarjeta: ['', Validators.required],
        dateTarjeta: ['', Validators.required],
        idUsurTarjeta: ['', Validators.required],

      })
    }

  }

  ngOnInit(): void {
    this.getTarjeta();
  }

  getTarjeta() {
    this.TarjetaHttpServiceService.getTarjeta().subscribe(data => {
      this.listadotarjeta = data;
    });
  }

  agregarTarjeta() {
    const list: any = {
      nombreTarjeta: this.TarjetaForm.get('nombreTarjeta')?.value,
      descTarjeta: this.TarjetaForm.get('descTarjeta')?.value,
      stateTarjeta: this.TarjetaForm.get('stateTarjeta')?.value,
      dateTarjeta: this.TarjetaForm.get('dateTarjeta')?.value,
      idUsurTarjeta: this.TarjetaForm.get('idUsurTarjeta')?.value,
      idTarjeta: 0
    }
    this.TarjetaHttpServiceService.createTarjeta(list).subscribe(data => {
      this.getTarjeta()
    })
  }



  eliminarTarjeta(id: number): void {
    this.TarjetaHttpServiceService.eliminarTarjeta(id).subscribe((data) => {
      if (data && data) {
        this.listadotarjeta = data;
      }
      this.getTarjeta();
    });
  }

  getEventValue($event: any): string {
    return $event.target.value;
  }
}
