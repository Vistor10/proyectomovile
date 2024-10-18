import { Component } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-carritocompras',
  templateUrl: './carritocompras.page.html',
  styleUrls: ['./carritocompras.page.scss'],
})
export class CarritocomprasPage {
  cartItems: any[] = [];
  userId: number = 2; // userId del usuario autenticado

  constructor(
    private servicebd: ServicebdService,
    private navCtrl: NavController // Inyectar NavController en el constructor
  ) { }

  ionViewWillEnter() {
    this.loadCartItems();
  }

  // Modificar la función loadCartItems para asignar las imágenes
  async loadCartItems() {
    try {
      this.cartItems = await this.servicebd.getCartItems(this.userId);

      // Asignar manualmente la URL de la imagen según el id_producto
      this.cartItems.forEach(item => {
        item.imagen = this.getProductImage(item.id_producto); // Asignar imagen
      });

      console.log('imagen cargada:', this.cartItems);
    } catch (error) {
      console.error('Error al cargar la imagen', error);
    }
  }

  // Método para obtener la URL de la imagen según el id_producto
  getProductImage(id_producto: number): string {
    switch (id_producto) {
    // Teclados
    case 1:
      return 'https://media.spdigital.cl/thumbnails/products/3r2pwux4_8665678f_thumbnail_512.jpg'; // TecladoRazerBlackwidowV4
    case 2:
      return 'https://media.spdigital.cl/thumbnails/products/snyhppat_a721dfd4_thumbnail_512.jpg'; // TecladoRazerHuntsmanMini
    case 3:
      return 'https://media.spdigital.cl/thumbnails/products/zwy4s9lw_57966fd8_thumbnail_512.png'; // TecladoCougarAttackX3
    case 4:
      return 'https://media.spdigital.cl/thumbnails/products/ppwci9lq_50a0c365_thumbnail_512.jpg'; // TecladoLogitechG213Prodigy
    // Gabinetes
    case 5:
      return 'https://media.spdigital.cl/thumbnails/products/88txvj8i_200d227b_thumbnail_512.png'; // GabineteCorsairiCue
    case 6:
      return 'https://media.spdigital.cl/thumbnails/products/6h2lh1by_22f3ee6b_thumbnail_512.jpg'; // GabineteKolinkVoid
    case 7:
      return 'https://media.spdigital.cl/thumbnails/products/_wq4_3_m_0d4a84e2_thumbnail_512.jpg'; // GabineteAerocoolShard
    case 8:
      return 'https://media.spdigital.cl/thumbnails/products/9mtx0k9j_4b2c460e_thumbnail_512.jpg'; // CoolerMasterCMP520
    // Audífonos
    case 9:
      return 'https://media.spdigital.cl/thumbnails/products/sclrc6tz_57cd70db_thumbnail_512.jpg'; // AudífonosRazerKrakenKittyQuartz
    case 10:
      return 'https://media.spdigital.cl/thumbnails/products/22c0wthz_45384651_thumbnail_512.jpg'; // AudífonosHyperXCloudStinger2
    case 11:
      return 'https://media.spdigital.cl/thumbnails/products/ypolap0x_dcedc470_thumbnail_512.jpg'; // AudífonosHyperXCloud3
    case 12:
      return 'https://media.spdigital.cl/thumbnails/products/wvwk9x87_25b20800_thumbnail_512.jpg'; // AudífonosLogitechG335
    // Placas Madre
    case 13:
      return 'https://media.spdigital.cl/thumbnails/products/udt3fqxu_27f2e082_thumbnail_512.jpg'; // PlacaMadreMSIA520M_APRO
    case 14:
      return 'https://media.spdigital.cl/thumbnails/products/yb0mzi8o_57a6a515_thumbnail_512.jpg'; // PlacaMadreGigabyteAORUXEliteAX
    case 15:
      return 'https://media.spdigital.cl/thumbnails/products/mp6q6_y0_7308a861_thumbnail_512.jpg'; // PlacaMadreMSI_PRO_Z70_A_MAX
    case 16:
      return 'https://media.spdigital.cl/thumbnails/products/pii2vjbr_7316916c_thumbnail_512.jpg'; // PlacaMadreGigabyteZ790UD
    // Fuentes de Poder
    case 17:
      return 'https://media.spdigital.cl/thumbnails/products/2wmybndr_f314bfdd_thumbnail_512.png'; // FuentedePoderVERTEXPX_1000
    case 18:
      return 'https://media.spdigital.cl/thumbnails/products/_bist34q_687bdc0d_thumbnail_512.png'; // FuentedePoderSeasonicG12_850GM
    case 19:
      return 'https://media.spdigital.cl/thumbnails/products/maw61p4d_0b867802_thumbnail_512.jpg'; // FuentedePoderThermaltakeSmart700W
    case 20:
      return 'https://media.spdigital.cl/thumbnails/products/lf6fjhhg_018eb41a_thumbnail_512.png'; // FuentedePoderCLIOATX_700
    // Memorias RAM
    case 21:
      return 'https://media.spdigital.cl/thumbnails/products/bmnbqq4b_89223714_thumbnail_512.png'; // MemoriaRamKingstonFURYRenegade
    case 22:
      return 'https://media.spdigital.cl/thumbnails/products/ngcwptyq_563b09c2_thumbnail_512.png'; // MemoriaRamDDR4XPG_SPECTRIX_D35G
    case 23:
      return 'https://media.spdigital.cl/thumbnails/products/_xiag1e3_7be5c2ae_thumbnail_512.jpg'; // MemoriaRamDDR4KingstonFURYBeast
    case 24:
      return 'https://media.spdigital.cl/thumbnails/products/r6wg8h5d_806087bc_thumbnail_512.jpg'; // MemoriaRamDDR4CorsairVengeance
    // Procesadores
    case 25:
      return 'https://media.spdigital.cl/thumbnails/products/1sew7rqf_79eaae73_thumbnail_512.jpg'; // ProcesadorAMDRyzen7_5800XT
    case 26:
      return 'https://media.spdigital.cl/thumbnails/products/ispzb71k_2e51a77b_thumbnail_512.jpg'; // ProcesadorIntelCorei5_10400
    case 27:
      return 'https://media.spdigital.cl/thumbnails/products/jyc8ynv8_f836da9b_thumbnail_512.jpg'; // ProcesadorIntelCorei9_14900
    case 28:
      return 'https://media.spdigital.cl/thumbnails/products/c725qtut_80d80dd3_thumbnail_512.jpg'; // ProcesadorAMDRyzen7_8700G
    // Tarjetas de Video
    case 29:
      return 'https://media.spdigital.cl/thumbnails/products/z4gsemrj_d8c06639_thumbnail_512.png'; // ASUSDualNvidiaGeForceRTX407
    case 30:
      return 'https://media.spdigital.cl/thumbnails/products/rwddzmal_161d7a72_thumbnail_512.png'; // GigabyteNvidiaGeForceRTX4070Ti
    case 31:
      return 'https://media.spdigital.cl/thumbnails/products/tuebyjvo_72ce1e1d_thumbnail_512.jpg'; // ZotacNvidiaGeForceRTX4070Ti
    case 32:
      return 'https://media.spdigital.cl/thumbnails/products/ehvdu6al_fedd27dd_thumbnail_512.png'; // ASUSTUFNvidiaGeForceRTX4080SUPER
    // Monitores
    case 33:
      return 'https://media.spdigital.cl/thumbnails/products/fqqvtub3_0cac7e5a_thumbnail_512.jpg'; // MonitorSamsungOdysseyG632
    case 34:
      return 'https://media.spdigital.cl/thumbnails/products/jyho6xu9_78536bc0_thumbnail_512.jpg'; // MonitorUltrawideCurvoLG32
    case 35:
      return 'https://media.spdigital.cl/thumbnails/products/tvlpbdac_aa836e31_thumbnail_512.jpg'; // MonitorCurvoSamsungOdysseyG95C49
    case 36:
      return 'https://media.spdigital.cl/thumbnails/products/pbgyco0j_7ae2c79b_thumbnail_512.jpg'; // MonitorGamerCurvoMSI49
    default:
      return 'assets/images/default.jpg'; // Imagen por defecto
    }
  }

  addToCart(productId: number) {
    const existingItem = this.cartItems.find(item => item.id_producto === productId);
    
    if (existingItem) {
      // Si el producto ya está en el carrito, aumentamos la cantidad
      existingItem.cantidad += 1;
      this.servicebd.updateCartItem(this.userId, productId, existingItem.cantidad)
        .then(() => this.loadCartItems())
        .catch(err => console.error('Error al actualizar la cantidad en el carrito', err));
    } else {
      // Si el producto no está en el carrito, lo agregamos
      this.servicebd.addToCart(this.userId, productId, 1)
        .then(() => this.loadCartItems())
        .catch(err => console.error('Error al añadir al carrito', err));
    }
  }
  
  // Método para aumentar la cantidad
  increaseQuantity(item: any) {
    item.cantidad += 1;
    this.servicebd.updateCartItem(this.userId, item.id_producto, item.cantidad)
      .then(() => this.loadCartItems())
      .catch(err => console.error('Error al actualizar la cantidad en el carrito', err));
  }
  
  // Método para disminuir la cantidad
  decreaseQuantity(item: any) {
    if (item.cantidad > 1) {
      item.cantidad -= 1;
      this.servicebd.updateCartItem(this.userId, item.id_producto, item.cantidad)
        .then(() => this.loadCartItems())
        .catch(err => console.error('Error al actualizar la cantidad en el carrito', err));
    }
  }

  // Método para eliminar un producto del carrito
  async removeFromCart(productId: number) {
    await this.servicebd.removeFromCart(this.userId, productId);
    this.loadCartItems(); // Recarga los items del carrito después de eliminar
  }

  // Método para calcular el total del carrito
  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  }

// Método para ir a la página de compra, con validación del carrito
goTocomprapage() {
  if (this.cartItems.length === 0) {
    console.log('El carrito está vacío. No se puede continuar con la compra.');
    // Aquí puedes mostrar una alerta o un mensaje informativo al usuario
    alert('No tienes productos en el carrito. Agrega productos antes de continuar.');
  } else {
    console.log('Navegando a la página de compra...');
    this.navCtrl.navigateForward('/compra'); 
  }
}
}
