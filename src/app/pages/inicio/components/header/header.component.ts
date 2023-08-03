import { Component } from '@angular/core';
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

  constructor(private categoriaService: CategoriaService,
    private subcategoriaService: SubcategoriaService) {
    this.categorias = categoriaService.obtenerTodas();
  }

  public obtenerSubcategorias(idCategoria: number): void {
      this.subcategorias = [];
      this.subcategoriaService.obtenerPorCategoria(idCategoria).subscribe(subcategorias => this.subcategorias = subcategorias);
  }

  public seleccionarSubcategoria(idCategoria: number): void {
    try {
      this.subcategoriaSeleccionada = this.subcategoriaService.obtenerPorId(idCategoria);
      this.subcategoriaSeleccionadaExiste = true;
    } catch (error) {
      console.error(error);
    }
  }

}
