import { Component, OnInit } from '@angular/core';
import { CentroCostoService } from '../services/centrocosto.service ';

@Component({
  selector: 'app-centrocos',
  templateUrl: './centrocosto.component.html',
  styleUrls: ['./centrocosto.component.css']
})
export class CentrocostoComponent implements OnInit {

  centrocosto: any;
 


  constructor(private centroCostoService: CentroCostoService) {
  }

  


  ngOnInit(): void {


    this.getCentroCosto();


  
  }

  getCentroCosto() {
    this.centroCostoService.getCentroCosto().subscribe(data => {
      this.centrocosto = data.listado;
    });
    
  }

  getEventValue($event: any): string {
    return $event.target.value;
  }

}
