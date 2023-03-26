import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BancosModel } from '../entities/Bancos';
import {BancoDto } from '../Dto/Bancos.dto';

@Injectable({
  providedIn: 'root'
})
export class BancosService {

  private apiUrl = 'http://localhost:8080/bancos/listarBancos';
  private api= 'http://localhost:8080/bancos'

  constructor(private http: HttpClient) { }

  
   getListado(): Observable<BancoDto[]> {
     return this.http.get<BancosModel>('http://localhost:8080/bancos/listarBancos').pipe(
      map(data => data.listado.map(p => new BancoDto(p)))
     );
   }

   createBanco(createBanco: BancosModel): Observable<any>{
    return this.http.post(`${this.api}/guardarConcepto`, createBanco);
  }


 

  }

