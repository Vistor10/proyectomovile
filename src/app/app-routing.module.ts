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
  },
  {
    path: 'placasmadre',
    loadChildren: () => import('./pages/placasmadre/placasmadre.module').then( m => m.PlacasmadrePageModule)
  },
  {
    path: 'fuentesdepoder',
    loadChildren: () => import('./pages/fuentesdepoder/fuentesdepoder.module').then( m => m.FuentesdepoderPageModule)
  },
  {
    path: 'memoriasram',
    loadChildren: () => import('./pages/memoriasram/memoriasram.module').then( m => m.MemoriasramPageModule)
  },
  {
    path: 'procesadores',
    loadChildren: () => import('./pages/procesadores/procesadores.module').then( m => m.ProcesadoresPageModule)
  },
  {
    path: 'tarjetasdevideo',
    loadChildren: () => import('./pages/tarjetasdevideo/tarjetasdevideo.module').then( m => m.TarjetasdevideoPageModule)
  },
  {
    path: 'monitores',
    loadChildren: () => import('./pages/monitores/monitores.module').then( m => m.MonitoresPageModule)
  },
  {
    path: 'recuperarcontrasena',
    loadChildren: () => import('./pages/recuperarcontrasena/recuperarcontrasena.module').then( m => m.RecuperarcontrasenaPageModule)
  },
  {
    path: 'sobrenosotros',
    loadChildren: () => import('./pages/sobrenosotros/sobrenosotros.module').then( m => m.SobrenosotrosPageModule)
  },
  {
    path: 'carritocompras',
    loadChildren: () => import('./pages/carritocompras/carritocompras.module').then( m => m.CarritocomprasPageModule)
  },
  

  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
