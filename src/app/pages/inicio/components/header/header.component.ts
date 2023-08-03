import { Component, EventEmitter, Output } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { Subcategoria } from 'src/app/models/subcategoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { SubcategoriaService } from 'src/app/services/subcategoria.service';

@Component({
  selector: 'inicio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public categorias: Categoria[] = [];
  public subcategorias: Subcategoria[] = [];
  public subcategoriaSeleccionada: Subcategoria = {} as Subcategoria;
  public subcategoriaSeleccionadaExiste: boolean = false;
  @Output() eventoOrdenarPorPrecio = new EventEmitter<string>();
  public orden: string = '';

  constructor(private categoriaService: CategoriaService,
    private subcategoriaService: SubcategoriaService) {
    this.categorias = categoriaService.obtenerTodas();
  }

  public obtenerSubcategorias(idCategoria: number): void {
      this.subcategorias = [];
      this.subcategoriaService.obtenerPorCategoria(idCategoria).subscribe(subcategorias => this.subcategorias = subcategorias);
  }

  public seleccionarSubcategoria(idCategoria: number): void {
    this.subcategoriaService.obtenerPorId(idCategoria).subscribe(subcategoria => {
      if (subcategoria) {
        this.subcategoriaSeleccionada = subcategoria;
        this.subcategoriaSeleccionadaExiste = true;
      }
    });
  }

  public ordenarProductos(): void {
    this.eventoOrdenarPorPrecio.emit(this.orden);
  }

}
