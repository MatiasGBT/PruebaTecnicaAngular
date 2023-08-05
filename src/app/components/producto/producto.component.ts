import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { Subcategoria } from 'src/app/models/subcategoria';
import { ProductoService } from 'src/app/services/producto.service';
import { SubcategoriaService } from 'src/app/services/subcategoria.service';

@Component({
  selector: 'producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() producto: Producto = {} as Producto;
  public subcategoria: Subcategoria = {} as Subcategoria;
  public estaEnElCarrito: boolean = false;

  constructor(private productoService: ProductoService,
    private subcategoriaService: SubcategoriaService) {}

  ngOnInit() {
    this.subcategoriaService.obtenerPorId(this.producto.id_subcategoria).subscribe(subcategoria => {
      if (subcategoria) this.subcategoria = subcategoria;
    });

    if (this.productoService.estaEnElCarrito(this.producto)) {
      this.estaEnElCarrito = true;
    }
  }

  public agregarAlCarrito(): void {
    this.productoService.eventoAgregarAlCarrito.emit();
    this.productoService.agregarAlCarrito(this.producto);
    this.estaEnElCarrito = true;
  }
}
