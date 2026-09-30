import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

// Importaciones directas (páginas que NO usan lazy loading)
import { LoginComponent }          from './pages/login/login.component';
import { DashboardComponent }      from './pages/dashboard/dashboard.component';
import { BuscarAlimentosComponent} from './pages/buscar-alimentos/buscar-alimentos.component';
import { MisComprasComponent }     from './pages/mis-compras/mis-compras.component';

const routes: Routes = [
  // Ruta raíz: redirige al login
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Login: pública (no requiere autenticación)
  { path: 'login', component: LoginComponent },

  // Inicio / Dashboard: requiere estar logueado (protegida por AuthGuard)
  {
    path: 'inicio',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },

  // Buscar alimentos: requiere estar logueado
  {
    path: 'buscar-alimentos',
    component: BuscarAlimentosComponent,
    canActivate: [AuthGuard]
  },

  // Productos: cargado con Lazy Loading
  // Angular solo descarga el ProductosModule cuando el usuario navega a /productos
  {
    path: 'productos',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/productos/productos.module')
        .then(m => m.ProductosModule)
  },

  // Mis compras: accesible para todos los usuarios autenticados
  {
    path: 'mis-compras',
    component: MisComprasComponent,
    canActivate: [AuthGuard]
  },

  // Ruta comodín: redirige al login si la URL no existe
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
