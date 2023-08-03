import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public productos: Producto[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.obtenerDestacados().subscribe(productos => this.productos = productos);
  }

  public ordenarProductos(orden: string): void {
    if (orden === 'menor') this.ordenarProductosPorMenorPrecio();
    if (orden === 'mayor') this.ordenarProductosPorMayorPrecio();
  }

  private ordenarProductosPorMenorPrecio(): void {
    this.productos = this.productos.sort((producto1, producto2) => producto1.precio - producto2.precio);
  }

  private ordenarProductosPorMayorPrecio(): void {
    this.productos = this.productos.sort((producto1, producto2) => producto1.precio - producto2.precio).reverse();
  }
}
