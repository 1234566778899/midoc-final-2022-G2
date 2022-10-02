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
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './components/landing/landing.component';
import { NavLandingComponent } from './components/nav-landing/nav-landing.component';
import { OlvidarPasswordComponent } from './components/olvidar-password/olvidar-password.component';
import { ValidarCodigoComponent } from './components/validar-codigo/validar-codigo.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RestaurePasswordComponent } from './components/restaure-password/restaure-password.component';


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
    RestaurePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
