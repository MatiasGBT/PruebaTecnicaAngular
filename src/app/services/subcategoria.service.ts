import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subcategoria } from '../models/subcategoria';
import { NotFoundError, Observable, catchError, map, of, throwError } from 'rxjs';

const API_URL = 'https://static.compragamer.com/test/subcategorias.json';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {
  private subcategorias: Subcategoria[] = [];

  constructor(private http: HttpClient) { }

  //Retorno el array de subcategorias de esta manera para evitar llamar al backend
  //cada que se abre un nuevo expandible de categoría en el template.
  //Esto se podría hacer en el mismo componente que llama al método, pero prefiero
  //dejar la lógica en el servicio.
  public obtenerPorCategoria(idCategoria: number): Observable<Subcategoria[]> {
    if (this.subcategorias.length == 0) {
      return this.obtenerSubcategoriasPorHttp(idCategoria);
    } else {
      return this.obtenerSubcategoriasPorVariable(idCategoria);
    }
  }

  private obtenerSubcategoriasPorHttp(idCategoria: number): Observable<Subcategoria[]> {
    return this.http.get<Subcategoria[]>(API_URL)
      .pipe(
        map(response => {
          this.subcategorias = response;
          return response.filter(subcategoria => subcategoria.id_agrupador == idCategoria);
        }),
        catchError(ex => throwError(() => ex))
      );
  }

  private obtenerSubcategoriasPorVariable(idCategoria: number): Observable<Subcategoria[]> {
    return of(this.subcategorias).pipe(map(response => response.filter(subcategoria => subcategoria.id_agrupador == idCategoria)));
  }

  public obtenerPorId(idSubcategoria: number): Subcategoria {
    let subcategoria = this.subcategorias.find(subcategoria => subcategoria.id === idSubcategoria);
    if (subcategoria) {
      return subcategoria;
    } else {
      throw NotFoundError;
    }
  }
}
