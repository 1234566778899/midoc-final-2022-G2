import { Producto } from 'src/app/moduls/producto';
import { Farmacia } from './farmacias';
export interface Compra {
    id: number,
    farmacia: Farmacia,
    producto: Producto,
    fechaCompra: Date,
    precioUnitario: number,
    cantidad: number,
    total:number
}