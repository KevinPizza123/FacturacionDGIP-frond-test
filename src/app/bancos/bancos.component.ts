import { Component, OnInit } from '@angular/core';
import { BancosService } from '../services/bancos.service';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import * as XLSX from 'xlsx';
import {BancoDto } from '../Dto/Bancos.dto';
 import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bancos',
  templateUrl: './bancos.component.html',
  styleUrls: ['./bancos.component.css']
})
export class BancosComponent implements OnInit {
items: MenuItem[] = [];
activeItem!: MenuItem;
activeItem2!: MenuItem;

  // BancoForm: FormGroup;
  Banco: BancoDto[] = []; //poner
  router: any;

  constructor(private BancoService: BancosService, private form: FormBuilder,) {
    // {
    //   this.BancoForm = this.form.group({
    //     nombreBancos: ['', Validators.required],
    //     descBancos: ['', Validators.required],
    //      estadoBancos: ['', Validators.required],
    //     fechaBancos: ['', Validators.required],
    //     fechaTc: ['', Validators.required],
    //    idUsuarioBancos: ['', Validators.required],

    //   })
    // }



  }

   ngOnInit(): void {
     this.getListaBanco();
   }

getListaBanco() {
    this.BancoService.getListado().subscribe(data => {
      this.Banco = data;
    });
  }


  // agregarBancos() {
  //   const list: any = {
  //     nombreBancos: this.TipoconceptoForm.get('nombreBancos')?.value,
  //     descTipoConcepto: this.TipoconceptoForm.get('descTipoConcepto')?.value,
  //     idUnidadTc: this.TipoconceptoForm.get('idUnidadTc')?.value,
  //     prtidaNc: this.TipoconceptoForm.get('prtidaNc')?.value,
  //     fechaTc: this.TipoconceptoForm.get('fechaTc')?.value,
  //     idUsuarioTc: this.TipoconceptoForm.get('idUsuarioTc')?.value,
  //     idTipoConcepto: 0
  //   }
  //   this.tipoconceptoService.createTipoConcepto(list).subscribe(data => {
  //   })
  //   this.getTipoConcepto()
  // }

  getEventValue($event: any): string {
    return $event.target.value;
  }


 /*name = 'ExcelSheet.xlsx';
  
  exportToExcel(): void {
    let element = document.getElementById('season-tble');
    const jsonData = XLSX.utils.sheet_to_json(element);
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }
 }*/
  

}