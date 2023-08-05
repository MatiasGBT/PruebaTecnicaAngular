import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Producto } from '../models/producto';

const API_URL = 'https://static.compragamer.com/test/productos.json';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  public eventoAgregarAlCarrito = new EventEmitter();
  private productosAgregadosAlCarrito: number[] = [];

  constructor(private http: HttpClient) { }

  public obtenerDestacados(): Observable<Producto[]> {
    return this.http.get<Producto[]>(API_URL)
    .pipe(
      map(response => response.filter(producto => producto.destacado == 1)),
      catchError(ex => throwError(() => ex))
    );
  }

  public obtenerPorSubcategoria(idSubcategoria: number): Observable<Producto[]> {
    return this.http.get<Producto[]>(API_URL).pipe(
      map(response => response.filter(producto => producto.id_subcategoria == idSubcategoria)),
      catchError(ex => throwError(() => ex))
    );
  }

  public obtenerPorNombre(nombre: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(API_URL).pipe(
      map(response => response.filter(producto => producto.nombre.toLowerCase().includes(nombre.toLowerCase()))),
      catchError(ex => throwError(() => ex))
    );
  }

  public agregarAlCarrito(producto: Producto): void {
    if (!this.estaEnElCarrito(producto)) {
      this.productosAgregadosAlCarrito.push(producto.id_producto);
    }
  }

  public estaEnElCarrito(producto: Producto): boolean {
    return this.productosAgregadosAlCarrito.find(id => id == producto.id_producto) !== undefined;
  }
}
