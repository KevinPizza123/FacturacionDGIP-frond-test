import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FormaPagoDTO } from '../Dto/FormaPago.dto';
import { FormaPagoModel } from '../entities/FormaPago';

@Injectable({
  providedIn: 'root'
})
export class FormapagoService {

  private apiUrl = 'http://localhost:8080/pago/listaFormaPago';

  constructor(private http: HttpClient) { }

  getFormaPago(): Observable<FormaPagoDTO[]> {
    return this.http.get<FormaPagoModel>('http://localhost:8080/pago/listaFormaPago').pipe(
      map(data => data.listado.map(p => new FormaPagoDTO(p)))
    );
  }

  eliminarFormaPago(id: number): Observable<FormaPagoDTO[]> {
    return this.http.delete<FormaPagoModel>('http://localhost:8080/pago/eliminarFormaPago/' + id ).pipe(
      map(data => data.listado)
    );
  }
}