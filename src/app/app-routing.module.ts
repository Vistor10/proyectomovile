import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full' // Redirige a la ruta de login al inicio
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'paginainicio', 
    loadChildren: () => import('./pages/paginainicio/paginainicio.module').then(m => m.PaginainicioPageModule)
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
  {
    path: 'placa-madre-msi-a520-m-apro',
    loadChildren: () => import('./pages/placa-madre-msi-a520-m-apro/placa-madre-msi-a520-m-apro.module').then( m => m.PlacaMadreMSIA520MAPROPageModule)
  },
  {
    path: 'placa-madre-gigabyte-aorux-elite-ax',
    loadChildren: () => import('./pages/placa-madre-gigabyte-aorux-elite-ax/placa-madre-gigabyte-aorux-elite-ax.module').then( m => m.PlacaMadreGigabyteAORUXELITEAXPageModule)
  },
  {
    path: 'placa-madre-msi-pro-z70-amax',
    loadChildren: () => import('./pages/placa-madre-msi-pro-z70-amax/placa-madre-msi-pro-z70-amax.module').then( m => m.PlacaMadreMSIPROZ70AMAXPageModule)
  },
  {
    path: 'placa-madre-gigabyte-z790-ud',
    loadChildren: () => import('./pages/placa-madre-gigabyte-z790-ud/placa-madre-gigabyte-z790-ud.module').then( m => m.PlacaMadreGigabyteZ790UDPageModule)
  },
  {
    path: 'fuente-de-poder-seasonic-vertexpx',
    loadChildren: () => import('./pages/fuente-de-poder-seasonic-vertexpx/fuente-de-poder-seasonic-vertexpx.module').then( m => m.FuenteDePoderSEASONICVERTEXPXPageModule)
  },
  {
    path: 'fuente-de-poder-seasonic-g12',
    loadChildren: () => import('./pages/fuente-de-poder-seasonic-g12/fuente-de-poder-seasonic-g12.module').then( m => m.FuenteDePoderSEASONICG12PageModule)
  },
  {
    path: 'fuente-de-poder-thermaltake-smart700',
    loadChildren: () => import('./pages/fuente-de-poder-thermaltake-smart700/fuente-de-poder-thermaltake-smart700.module').then( m => m.FuenteDePoderThermaltakeSmart700PageModule)
  },
  {
    path: 'fuente-de-poder-clio-atx-700',
    loadChildren: () => import('./pages/fuente-de-poder-clio-atx-700/fuente-de-poder-clio-atx-700.module').then( m => m.FuenteDePoderCLIOATX700PageModule)
  },
  {
    path: 'memoria-ram-kingston-fury-renegade',
    loadChildren: () => import('./pages/memoria-ram-kingston-fury-renegade/memoria-ram-kingston-fury-renegade.module').then( m => m.MemoriaRamKingstonFuryRenegadePageModule)
  },
  {
    path: 'memoria-ram-ddr4-xpg-spectrix',
    loadChildren: () => import('./pages/memoria-ram-ddr4-xpg-spectrix/memoria-ram-ddr4-xpg-spectrix.module').then( m => m.MemoriaRamDdr4XPGSPECTRIXPageModule)
  },
  {
    path: 'memoria-ram-kingston-fury-beast',
    loadChildren: () => import('./pages/memoria-ram-kingston-fury-beast/memoria-ram-kingston-fury-beast.module').then( m => m.MemoriaRamKingstonFuryBeastPageModule)
  },
  {
    path: 'memoria-ram-corsair-vengeance',
    loadChildren: () => import('./pages/memoria-ram-corsair-vengeance/memoria-ram-corsair-vengeance.module').then( m => m.MemoriaRamCorsairVengeancePageModule)
  },
  {
    path: 'procesador-amd-ryzen7-5800-xt',
    loadChildren: () => import('./pages/procesador-amd-ryzen7-5800-xt/procesador-amd-ryzen7-5800-xt.module').then( m => m.ProcesadorAMDRyzen75800XTPageModule)
  },
  {
    path: 'procesador-intel-core-i5-10400',
    loadChildren: () => import('./pages/procesador-intel-core-i5-10400/procesador-intel-core-i5-10400.module').then( m => m.ProcesadorIntelCoreI510400PageModule)
  },
  {
    path: 'procesador-intel-core-i9-14900',
    loadChildren: () => import('./pages/procesador-intel-core-i9-14900/procesador-intel-core-i9-14900.module').then( m => m.ProcesadorIntelCoreI914900PageModule)
  },
  {
    path: 'procesador-amd-ryzen7-8700-g',
    loadChildren: () => import('./pages/procesador-amd-ryzen7-8700-g/procesador-amd-ryzen7-8700-g.module').then( m => m.ProcesadorAMDRyzen78700GPageModule)
  },
  {
    path: 'tarjeta-de-video-asus-dual-nvidia-rtx4070',
    loadChildren: () => import('./pages/tarjeta-de-video-asus-dual-nvidia-rtx4070/tarjeta-de-video-asus-dual-nvidia-rtx4070.module').then( m => m.TarjetaDeVideoASUSDualNvidiaRTX4070PageModule)
  },
  {
    path: 'tarjeta-de-video-gigabyte-nvidia-geforce-rtx-4070',
    loadChildren: () => import('./pages/tarjeta-de-video-gigabyte-nvidia-geforce-rtx-4070/tarjeta-de-video-gigabyte-nvidia-geforce-rtx-4070.module').then( m => m.TarjetaDeVideoGigabyteNvidiaGeforceRTX4070PageModule)
  },
  {
    path: 'tarjeta-de-video-zotac-gaming-nvidia-geforce-rtx-4070',
    loadChildren: () => import('./pages/tarjeta-de-video-zotac-gaming-nvidia-geforce-rtx-4070/tarjeta-de-video-zotac-gaming-nvidia-geforce-rtx-4070.module').then( m => m.TarjetaDeVideoZotacGamingNvidiaGeforceRtx4070PageModule)
  },
  {
    path: 'tarjeta-de-video-asus-tuf-gaming-nvidia-geforce-rtx-4080',
    loadChildren: () => import('./pages/tarjeta-de-video-asus-tuf-gaming-nvidia-geforce-rtx-4080/tarjeta-de-video-asus-tuf-gaming-nvidia-geforce-rtx-4080.module').then( m => m.TarjetaDeVideoASUSTUFGAMINGNvidiaGeforceRtx4080PageModule)

  }, 
  {
    path: 'monitor-gamer-samsung-odyssey-g6',
    loadChildren: () => import('./pages/monitor-gamer-samsung-odyssey-g6/monitor-gamer-samsung-odyssey-g6.module').then( m => m.MonitorGamerSamsungOdysseyG6PageModule)
  },
  {
    path: 'monitor-ultrawide-curvo-lg',
    loadChildren: () => import('./pages/monitor-ultrawide-curvo-lg/monitor-ultrawide-curvo-lg.module').then( m => m.MonitorUltrawideCurvoLGPageModule)
  },
  {
    path: 'monitor-gamer-curvo-samsung-odyssey-g95-c-49',
    loadChildren: () => import('./pages/monitor-gamer-curvo-samsung-odyssey-g95-c-49/monitor-gamer-curvo-samsung-odyssey-g95-c-49.module').then( m => m.MonitorGamerCurvoSamsungOdysseyG95C49PageModule)
  },
  {
    path: 'monitor-gamer-curvo-msi-49',
    loadChildren: () => import('./pages/monitor-gamer-curvo-msi-49/monitor-gamer-curvo-msi-49.module').then( m => m.MonitorGamerCurvoMSI49PageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'agregarproducto',
    loadChildren: () => import('./pages/agregarproducto/agregarproducto.module').then( m => m.AgregarproductoPageModule)
  },
  {
    path: 'modificarproducto',
    loadChildren: () => import('./pages/modificarproducto/modificarproducto.module').then( m => m.ModificarproductoPageModule)
  },
  
  {
    path: 'modificarperfil',
    loadChildren: () => import('./pages/modificarperfil/modificarperfil.module').then( m => m.ModificarperfilPageModule)
  },
  
  {
    path: 'eliminarproducto',
    loadChildren: () => import('./pages/eliminarproducto/eliminarproducto.module').then( m => m.EliminarproductoPageModule)
  },
  
  {
    path: 'compra',
    loadChildren: () => import('./pages/compra/compra.module').then( m => m.CompraPageModule)
  },
  
  {
    path: 'modificarcontrasena',
    loadChildren: () => import('./pages/modificarcontrasena/modificarcontrasena.module').then( m => m.ModificarcontrasenaPageModule)
  },
  
  {
    path: 'modificarcorreo',
    loadChildren: () => import('./pages/modificarcorreo/modificarcorreo.module').then( m => m.ModificarcorreoPageModule)
  },
  {

    path: '**',
    loadChildren: () => import('./pages/notfound/notfound.module').then( m => m.NotfoundPageModule)
 
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

  



  

  





