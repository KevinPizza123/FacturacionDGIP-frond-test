import { Component, OnInit } from '@angular/core';
import { CentroCostoDto } from '../Dto/CentroCosto.dto';
import { CentroCostoService } from '../services/centrocosto.service ';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-centrocos',
  templateUrl: './centrocosto.component.html',
  styleUrls: ['./centrocosto.component.css']
})
export class CentrocostoComponent implements OnInit {

  centrocosto: CentroCostoDto[] = [];

  CentrocostoForm: FormGroup
 


  constructor(private centroCostoService: CentroCostoService, private form: FormBuilder, private router:Router) {

    {
      this.CentrocostoForm = this.form.group({
        codCentroCosto: ['', Validators.required],
        nombreCentroCosto: ['', Validators.required],
        descCentroCosto: ['', Validators.required],
        estadoCentroCosto: ['', Validators.required],
        fechaCentroCosto: ['', Validators.required],
        fechaFp: ['', Validators.required],
        idUsuarioCentroCosto: ['', Validators.required],

    })
  }
  }


  


  ngOnInit(): void {


    this.getCentroCosto();


  
  }

  getCentroCosto() {
    this.centroCostoService.getCentroCosto().subscribe(data => {
      this.centrocosto = data;
    });
  }


  agregarCentroCosto() {
    const list: any = {
      codCentroCosto: this.CentrocostoForm.get('codCentroCosto')?.value,
      nombreCentroCosto: this.CentrocostoForm.get('nombreCentroCosto')?.value,
      descCentroCosto: this.CentrocostoForm.get('descCentroCosto')?.value,
      estadoCentroCosto: this.CentrocostoForm.get('estadoCentroCosto')?.value,
      fechaCentroCosto: this.CentrocostoForm.get('fechaCentroCosto')?.value,
      idUsuarioCentroCosto: this.CentrocostoForm.get('idUsuarioCentroCosto')?.value,
      idCentroCosto: 0,
    }
    this.centroCostoService.createCentroCosto(list).subscribe(data => {
     this.getCentroCosto()
    })
    this.getCentroCosto() 

  }


  elimiCentrocosto(id: number): void {
    this.centroCostoService.eliminarCentroCosto(id).subscribe((data) => {
      if (data && data) {
        this.centrocosto = data;
      }
      this.getCentroCosto();
    });
  }


  getEventValue($event: any): string {
    return $event.target.value;
  }

  openNew(){
    this.router.navigate(['centroCosto']);  
  }

}
