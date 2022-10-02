export interface Producto{
    id:number,
    id_proveedor:number,
    nombre:string,
    registro_sanitario:string,
    presentacion:string,
    tipo:string,
    esRecetado:boolean,
    descripcion:string
}

// "id": 1,
//     "id_proveedor": 1,
//     "nombre": "Ibuprofeno",
//     "registro sanitario": "PAHO",
//     "presentación": "200 mg",
//     "tipo": "Genérico",
//     "esRecetado": true,
//     "descripcion": "Capsula"