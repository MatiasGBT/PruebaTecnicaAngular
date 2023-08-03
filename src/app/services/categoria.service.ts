import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor() { }

  public obtenerTodas(): Categoria[] {
    return [
      {
        "id_categoria": 24,
        "nombre": "Periféricos"
      },
      {
        "id_categoria": 6,
        "nombre": "Monitores y Televisores"
      },
      {
        "id_categoria": 2,
        "nombre": "Placas de Video"
      },
      {
        "id_categoria": 8,
        "nombre": "Gabinetes"
      },
      {
        "id_categoria": 10,
        "nombre": "Memorias RAM"
      },
      {
        "id_categoria": 9,
        "nombre": "Almacenamiento"
      },
      {
        "id_categoria": 1,
        "nombre": "Mothers"
      },
      {
        "id_categoria": 7,
        "nombre": "Procesadores"
      },
      {
        "id_categoria": 26,
        "nombre": "Fuentes"
      },
      {
        "id_categoria": 25,
        "nombre": "Refrigeración"
      },
      {
        "id_categoria": 5,
        "nombre": "Equipos y Notebooks"
      },
    ].sort((categoria1, categoria2) => categoria1.id_categoria - categoria2.id_categoria) as Categoria[];
  }
}
