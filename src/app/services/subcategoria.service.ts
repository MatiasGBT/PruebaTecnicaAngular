import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subcategoria } from '../models/subcategoria';
import { Observable, catchError, map, throwError } from 'rxjs';

const API_URL = 'https://static.compragamer.com/test/subcategorias.json';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {

  constructor(private http: HttpClient) { }

  public obtenerPorCategoria(idCategoria: number): Observable<Subcategoria[]> {
    return this.http.get<Subcategoria[]>(API_URL)
    .pipe(
      map(response => response.filter(subcategoria => subcategoria.id_agrupador == idCategoria)),
      catchError(ex => throwError(() => ex))
    );
  }
}
