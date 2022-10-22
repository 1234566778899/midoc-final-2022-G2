import { Producto } from 'src/app/moduls/producto';
import { Farmacia } from './farmacias';
export interface Stock {
    id: number,
    farmacia: Farmacia,
    producto: Producto,
    cantidadUnitaria: number,
    precioUnitario: number,
    fechaVencimiento: Date
}