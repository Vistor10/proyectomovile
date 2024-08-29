import { Routes } from '@angular/router';
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'proyectomovile',
  webDir: 'www'
};

export default config;
export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'paginainicio',
    loadChildren: () => import('./pages/paginainicio/paginainicio.module').then(m => m.PaginainicioPageModule)
  },
  {
    path: 'gabinetes',
    loadChildren: () => import('./pages/gabinetes/gabinetes.module').then(m => m.GabinetesPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'teclados',
    loadChildren: () => import('./pages/teclados/teclados.module').then(m => m.TecladosPageModule)
  },
  {
    path: 'audifonosgamer',
    loadChildren: () => import('./pages/audifonosgamer/audifonosgamer.module').then(m => m.AudifonosgamerPageModule)
  },
  {
    path: 'teclados',
    loadChildren: () => import('./pages/teclados/teclados.module').then(m => m.TecladosPageModule)
  },
  {
    path: 'audifonosgamer',
    loadChildren: () => import('./pages/audifonosgamer/audifonosgamer.module').then(m => m.AudifonosgamerPageModule)
  },
  {
    path: 'placasmadre',
    loadChildren: () => import('./pages/placasmadre/placasmadre.module').then(m => m.PlacasmadrePageModule)
  },
  {
    path: 'fuentesdepoder',
    loadChildren: () => import('./pages/fuentesdepoder/fuentesdepoder.module').then(m => m.FuentesdepoderPageModule)
  },
  {
    path: 'memoriasram',
    loadChildren: () => import('./pages/memoriasram/memoriasram.module').then(m => m.MemoriasramPageModule)
  },
  {
    path: 'procesadores',
    loadChildren: () => import('./pages/procesadores/procesadores.module').then(m => m.ProcesadoresPageModule)
  },
  {
    path: 'tarjetasdevideo',
    loadChildren: () => import('./pages/tarjetasdevideo/tarjetasdevideo.module').then(m => m.TarjetasdevideoPageModule)
  },
  {
    path: 'monitores',
    loadChildren: () => import('./pages/monitores/monitores.module').then(m => m.MonitoresPageModule)
  },
  {
    path: 'recuperarcontrasena',
    loadChildren: () => import('./pages/recuperarcontrasena/recuperarcontrasena.module').then(m => m.RecuperarcontrasenaPageModule)
  },
  {
    path: 'sobrenosotros',
    loadChildren: () => import('./pages/sobrenosotros/sobrenosotros.module').then(m => m.SobrenosotrosPageModule)
  },
];
