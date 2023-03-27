import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  PagoForm: FormGroup;
  formapago: FormaPagoDTO[] = []; //poner

  constructor(private formapagoService: FormapagoService, private form: FormBuilder, private router:Router) {
    {
      this.PagoForm = this.form.group({
        nombreFp: ['', Validators.required],
        codigoSri: ['', Validators.required],
        activo: ['', Validators.required],
        codigoSae: ['', Validators.required],
        descripcionFp: ['', Validators.required],
        fechaFp: ['', Validators.required],
        idUsuarioFp: ['', Validators.required],

    })
  }


 }

  ngOnInit(): void {
    this.getListaFPago();
  }

  getListaFPago() {
    this.formapagoService.getFormaPago().subscribe(data => {
      this.formapago = data;
    });
  }

  agregarFormaPago() {
    const list: any = {
      nombreFp: this.PagoForm.get('nombreFp')?.value,
      codigoSri: this.PagoForm.get('codigoSri')?.value,
      activo: this.PagoForm.get('activo')?.value,
      codigoSae: this.PagoForm.get('codigoSae')?.value,
      descripcionFp: this.PagoForm.get('descripcionFp')?.value,
      fechaFp: this.PagoForm.get('fechaFp')?.value,
      idUsuarioFp: this.PagoForm.get('idUsuarioFp')?.value,
      idFormaPago: 0
    }
    this.formapagoService.createFPago(list).subscribe(data => {
     this.getListaFPago()
    })
    this.getListaFPago() 
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
