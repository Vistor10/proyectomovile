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
    path: 'fuentesdepoder',
    loadChildren: () => import('./pages/fuentesdepoder/fuentesdepoder.module').then( m => m.FuentesdepoderPageModule)
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
    path: 'historialcomprausuario',
    loadChildren: () => import('./pages/historialcomprausuario/historialcomprausuario.module').then( m => m.HistorialcomprausuarioPageModule)
  },
  {
    path: 'modificarcategorias',
    loadChildren: () => import('./pages/modificarcategorias/modificarcategorias.module').then( m => m.ModificarcategoriasPageModule)
  },
  {
    path: 'agregarcategoria',
    loadChildren: () => import('./pages/agregarcategoria/agregarcategoria.module').then( m => m.AgregarcategoriaPageModule)
  },
  {
    path: 'contrasenanuevaolvido',
    loadChildren: () => import('./pages/contrasenanuevaolvido/contrasenanuevaolvido.module').then( m => m.ContrasenanuevaolvidoPageModule)
  },
  {
    path: 'historialadmin',
    loadChildren: () => import('./pages/historialadmin/historialadmin.module').then( m => m.HistorialadminPageModule)
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

  



  

  





