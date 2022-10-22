import { ActivatedRoute } from '@angular/router';
import { VentasService } from './../../services/ventas/ventas.service';
import { ClientesService } from './../../services/clientes/clientes.service';
import { DetalleCliente } from './../../moduls/detalleCliente';
import { Venta } from './../../moduls/ventas';
import { Cliente } from './../../moduls/cliente';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {


  displayedColumns: string[] = ['dni', 'nombre', 'apellido', 'numero', 'monto', 'quitar'];
  dataSource!: MatTableDataSource<DetalleCliente>;
  detalleCliente: DetalleCliente[] = [];
  clientes: Cliente[] = [];
  ventas: Venta[] = [];
  id_farmacia!: number;
  constructor(private clienteService: ClientesService,
    private ventasService: VentasService,
    private activated: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_farmacia = this.activated.snapshot.params['id'];
    this.getClientes();
    this.getVentas();

    setTimeout(() => {
  
      this.dataSource = new MatTableDataSource(this.detalleCliente);
      console.log(this.detalleCliente);
    }, 500);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  existeClientes(id: number): boolean {
    for (let i = 0; i < this.detalleCliente.length; i++) {
      if (this.detalleCliente[i].id == id) return true;
    }
    return false;
  }
  getIndice(id: number) {
    for (let i = 0; i < this.detalleCliente.length; i++) {
      if (this.detalleCliente[i].id == id) return i;
    }
    return 0;
  }
  
  getClientes() {
    this.clienteService.getClientes().subscribe(
      (data: Cliente[]) => {
        this.clientes = data;
      }
    )
  }

  getVentas() {
    this.ventasService.getVentas().subscribe(
      (data: Venta[]) => {
        this.ventas = data;
      }
    )
  }


}
