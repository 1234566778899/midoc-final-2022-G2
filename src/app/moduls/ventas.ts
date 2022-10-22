import { Farmacia } from './farmacias';
import { Cliente } from "./cliente";

export interface Venta {
    id: number,
    farmacia: Farmacia,
    cliente: Cliente,
    fecha: Date,
    total: number,
    numeroBoleta: number,
    formaPago: string
}
