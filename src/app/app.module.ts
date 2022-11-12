import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InventarioComponent } from './components/inventario/inventario.component';
import { AddEditProductsComponent } from './components/add-edit-products/add-edit-products.component';
import { LoginComponent } from './components/login/login.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ComprasComponent } from './components/compras/compras.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './components/landing/landing.component';
import { NavLandingComponent } from './components/nav-landing/nav-landing.component';
import { OlvidarPasswordComponent } from './components/olvidar-password/olvidar-password.component';
import { ValidarCodigoComponent } from './components/validar-codigo/validar-codigo.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RestaurePasswordComponent } from './components/restaure-password/restaure-password.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { DetalleVentasComponent } from './components/detalle-ventas/detalle-ventas.component';
import { FinanzasComponent } from './components/finanzas/finanzas.component';
import { FinanzasResumenSemanalComponent } from './components/finanzas-resumen-semanal/finanzas-resumen-semanal.component';
import { FinanzasGananciasComponent } from './components/finanzas-ganancias/finanzas-ganancias.component';
import { FinanzasProductosComponent } from './components/finanzas-productos/finanzas-productos.component';
import { BoletaComponent } from './components/boleta/boleta.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { AdminFarmaciasComponent } from './components/admin-farmacias/admin-farmacias.component';
import { AdminProveedoresComponent } from './components/admin-proveedores/admin-proveedores.component';
import { AdminConsultasComponent } from './components/admin-consultas/admin-consultas.component';
import { AdminProductosComponent } from './components/admin-productos/admin-productos.component';


@NgModule({
  declarations: [
    AppComponent,
    VentasComponent,
    NavbarComponent,
    InventarioComponent,
    AddEditProductsComponent,
    LoginComponent,
    ClientesComponent,
    ComprasComponent,
    LandingComponent,
    NavLandingComponent,
    OlvidarPasswordComponent,
    ValidarCodigoComponent,
    RegistrarComponent,
    PerfilComponent,
    RestaurePasswordComponent,
    PruebasComponent,
    DetalleVentasComponent,
    FinanzasComponent,
    FinanzasResumenSemanalComponent,
    FinanzasGananciasComponent,
    FinanzasProductosComponent,
    BoletaComponent,
    AdministradorComponent,
    AdminFarmaciasComponent,
    AdminProveedoresComponent,
    AdminConsultasComponent,
    AdminProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
