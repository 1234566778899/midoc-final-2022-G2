import { FinanzasComponent } from './components/finanzas/finanzas.component';
import { DetalleVentasComponent } from './components/detalle-ventas/detalle-ventas.component';
import { DetalleCompraComponent } from './components/detalle-compra/detalle-compra.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { RestaurePasswordComponent } from './components/restaure-password/restaure-password.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { ValidarCodigoComponent } from './components/validar-codigo/validar-codigo.component';
import { OlvidarPasswordComponent } from './components/olvidar-password/olvidar-password.component';
import { LandingComponent } from './components/landing/landing.component';
import { ComprasComponent } from './components/compras/compras.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { LoginComponent } from './components/login/login.component';
import { AddEditProductsComponent } from './components/add-edit-products/add-edit-products.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'user/:id', component: InventarioComponent },
  { path: "ventas/:id", component: VentasComponent },
  { path: "inventario/:id", component: InventarioComponent },
  { path: "perfil/:id", component: PerfilComponent},
  { path: "user/:id/add", component: AddEditProductsComponent },
  { path: "edit-stock/:id/:id_stock", component: AddEditProductsComponent },
  { path: "clientes/:id", component: ClientesComponent },
  { path: "compras/:id", component: ComprasComponent },
  { path: "detalleCompras/:id", component: DetalleCompraComponent },
  { path: "detalleVentas/:id", component: DetalleVentasComponent},
  { path: "finanzas/:id", component: FinanzasComponent},
  { path: "olvidar", component: OlvidarPasswordComponent },
  { path: "validar", component: ValidarCodigoComponent },
  { path: "login", component: LoginComponent },
  { path: 'landing', component: LandingComponent },
  { path: "registrar", component: RegistrarComponent },
  { path: "restaure-password", component: RestaurePasswordComponent },
  { path: "pruebas", component: PruebasComponent },
  { path: "**", component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
