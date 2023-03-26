import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoConceptoModel, TipoConcepto } from '../entities/TipoConcepto';
import { TipoconceptoService } from '../services/tipoconcepto.service';
import { TipoConceptoDTO } from '../Dto/TipoConcepto.dto';

@Component({
  selector: 'app-tipoconcepto',
  templateUrl: './tipoconcepto.component.html',
  styleUrls: ['./tipoconcepto.component.css']
})

export class TipoconceptoComponent implements OnInit {


  TipoconceptoForm: FormGroup;
  listadoconcepto: TipoConceptoDTO[] = []; //poner

  constructor(private tipoconceptoService: TipoconceptoService, private form: FormBuilder,) {
    {
      this.TipoconceptoForm = this.form.group({
        nombreTipoConcepto: ['', Validators.required],
        descTipoConcepto: ['', Validators.required],
        idUnidadTc: ['', Validators.required],
        prtidaNc: ['', Validators.required],
        fechaTc: ['', Validators.required],
        idUsuarioTc: ['', Validators.required],

      })
    }

  }


  ngOnInit(): void {
    this.getTipoConcepto();
  }

  getTipoConcepto() {
    this.tipoconceptoService.getListado().subscribe(data => {
      this.listadoconcepto = data;
    });
  }

  agregarTipoConcepto() {
    const list: any = {
      nombreTipoConcepto: this.TipoconceptoForm.get('nombreTipoConcepto')?.value,
      descTipoConcepto: this.TipoconceptoForm.get('descTipoConcepto')?.value,
      idUnidadTc: this.TipoconceptoForm.get('idUnidadTc')?.value,
      prtidaNc: this.TipoconceptoForm.get('prtidaNc')?.value,
      fechaTc: this.TipoconceptoForm.get('fechaTc')?.value,
      idUsuarioTc: this.TipoconceptoForm.get('idUsuarioTc')?.value,
      idTipoConcepto: 0
    }
    this.tipoconceptoService.createTipoConcepto(list).subscribe(data => {
    })
    this.getTipoConcepto()
  }


  eliminarTipoConcepto(id: number): void {
    this.tipoconceptoService.eliminarTipoConcepto(id).subscribe((data) => {
      if (data && data) {
        this.listadoconcepto = data;
      }
      this.getTipoConcepto();
    });
  } 

  getEventValue($event: any): string {
    return $event.target.value;
  }
}





