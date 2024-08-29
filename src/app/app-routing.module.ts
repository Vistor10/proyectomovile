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
  {
    path: 'razer-kraken-kitty',
    loadChildren: () => import('./pages/razer-kraken-kitty/razer-kraken-kitty.module').then( m => m.RazerKrakenKittyPageModule)
  },
  {
    path: 'hyperx-cloud-stinger-2',
    loadChildren: () => import('./pages/hyperx-cloud-stinger-2/hyperx-cloud-stinger-2.module').then( m => m.HyperxCloudStinger2PageModule)
  },
  {
    path: 'logitech-g335',
    loadChildren: () => import('./pages/logitech-g335/logitech-g335.module').then( m => m.LogitechG335PageModule)
  },
  {
    path: 'hyperx-cloud-3',
    loadChildren: () => import('./pages/hyperx-cloud-3/hyperx-cloud-3.module').then( m => m.HyperxCloud3PageModule)
  },
  {
    path: 'gabinete-gamercorsair-icue-4000',
    loadChildren: () => import('./pages/gabinete-gamercorsair-icue-4000/gabinete-gamercorsair-icue-4000.module').then( m => m.GabineteGamercorsairIcue4000PageModule)
  },
  {
    path: 'gabinete-gamer-kolink',
    loadChildren: () => import('./pages/gabinete-gamer-kolink/gabinete-gamer-kolink.module').then( m => m.GabineteGamerKolinkPageModule)
  },
  {
    path: 'gabinete-gamer-aerocool-shard',
    loadChildren: () => import('./pages/gabinete-gamer-aerocool-shard/gabinete-gamer-aerocool-shard.module').then( m => m.GabineteGamerAerocoolShardPageModule)
  },
  {
    path: 'gabinete-gamer-cooler-master-cmp520',
    loadChildren: () => import('./pages/gabinete-gamer-cooler-master-cmp520/gabinete-gamer-cooler-master-cmp520.module').then( m => m.GabineteGamerCoolerMasterCmp520PageModule)
  },
  {
    path: 'teclado-gamer-razer-blackwidow',
    loadChildren: () => import('./pages/teclado-gamer-razer-blackwidow/teclado-gamer-razer-blackwidow.module').then( m => m.TecladoGamerRazerBlackwidowPageModule)
  },
  {
    path: 'teclado-gamer-razer-huntsman',
    loadChildren: () => import('./pages/teclado-gamer-razer-huntsman/teclado-gamer-razer-huntsman.module').then( m => m.TecladoGamerRazerHuntsmanPageModule)
  },
  {
    path: 'teclado-gamer-cougar-attack',
    loadChildren: () => import('./pages/teclado-gamer-cougar-attack/teclado-gamer-cougar-attack.module').then( m => m.TecladoGamerCougarAttackPageModule)
  },
  {
    path: 'teclado-gamer-logitech-g213',
    loadChildren: () => import('./pages/teclado-gamer-logitech-g213/teclado-gamer-logitech-g213.module').then( m => m.TecladoGamerLogitechG213PageModule)
  },

  

  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
