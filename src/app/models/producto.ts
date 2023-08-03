import { ProductoImagen } from "./producto-imagen";

export interface Producto {
    id_producto: number,
    nombre: string,
    precio: number,
    destacado: number,
    stock: number,
    garantia: number,
    iva: number,
    imagenes: ProductoImagen[],
    id_subcategoria: number
}
