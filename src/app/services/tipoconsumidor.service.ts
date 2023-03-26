import { TipoConsumidorModel} from 'src/app/entities/TipoConsumidor';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListadoDTO } from '../Dto/TipoConsumidor.dto';

@Injectable({
  providedIn: 'root',
})
export class TipoconsumidorService {
  private apiUrl = 'http://localhost:8080/Cosumidor/listaConsumidor';

  constructor(private http: HttpClient) {}

  getListado(): Observable<ListadoDTO[]> {
    return this.http.get<TipoConsumidorModel>('http://localhost:8080/Cosumidor/listaConsumidor').pipe(
      map(data => data.listado.map(p => new ListadoDTO(p)))
    );
  }

  eliminarTipoConsumidor(id: number): Observable<ListadoDTO[]> {
    return this.http.delete<TipoConsumidorModel>('http://localhost:8080/Cosumidor/eliminarConsumidor/' + id ).pipe(
      map(data => data.listado)
    );
  }
  

}
