import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Módulo compartido (Navbar)
import { SharedModule } from './shared/shared.module';

// Componente raíz
import { AppComponent } from './app.component';

// Páginas del módulo raíz (NO están en Lazy Loading)
import { LoginComponent }           from './pages/login/login.component';
import { DashboardComponent }       from './pages/dashboard/dashboard.component';
import { BuscarAlimentosComponent } from './pages/buscar-alimentos/buscar-alimentos.component';
import { MisComprasComponent }      from './pages/mis-compras/mis-compras.component';

// AppModule es el módulo raíz que arranca la aplicación.
// Registra todos los componentes, módulos e importaciones necesarias.
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    BuscarAlimentosComponent,
    MisComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,            // Para el ngModel del buscar alimentos
    ReactiveFormsModule,    // Para los formularios de login y productos
    HttpClientModule,       // Para el servicio de la API externa
    SharedModule,           // Contiene NavbarComponent
    MatProgressSpinnerModule // Angular Material: spinner en el botón de login
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
