export interface Compra {
    id: number,
    id_farmacia: number,
    id_producto: number,
    fecha: Date,
    precio_unidad: number,
    cantidad: number,
    total: number,
    registrado: Boolean
}