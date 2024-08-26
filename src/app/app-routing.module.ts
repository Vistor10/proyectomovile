import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'paginainicio',
    loadChildren: () => import('./pages/paginainicio/paginainicio.module').then( m => m.PaginainicioPageModule)
  },
  {
    path: 'gabinetes',
    loadChildren: () => import('./pages/gabinetes/gabinetes.module').then( m => m.GabinetesPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'teclados',
    loadChildren: () => import('./pages/teclados/teclados.module').then( m => m.TecladosPageModule)
  },
  {
    path: 'audifonosgamer',
    loadChildren: () => import('./pages/audifonosgamer/audifonosgamer.module').then( m => m.AudifonosgamerPageModule)
  },
  {
    path: 'teclados',
    loadChildren: () => import('./pages/teclados/teclados.module').then( m => m.TecladosPageModule)
  },
  {
    path: 'audifonosgamer',
    loadChildren: () => import('./pages/audifonosgamer/audifonosgamer.module').then( m => m.AudifonosgamerPageModule)
  },  {
    path: 'placasmadre',
    loadChildren: () => import('./pages/placasmadre/placasmadre.module').then( m => m.PlacasmadrePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
