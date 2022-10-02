export interface Venta {
    id: number,
    id_farmacia: number,
    id_cliente: number,
    fecha: Date,
    total: number,
    numero_boleta: number,
    forma_pago: string
}
