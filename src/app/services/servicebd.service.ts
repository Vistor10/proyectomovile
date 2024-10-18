import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import {  ToastController, AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from './producto';
@Injectable({
  providedIn: 'root',
})
export class ServicebdService {
  private databaseObj: SQLiteObject | null = null; // Inicializar como null
  readonly db_name: string = "gadgetzone_db2.db";
  readonly table_rol: string = "rol";
  readonly table_usuario: string = "usuario";
  readonly table_categoria: string = "categoria";
  readonly table_producto: string = "producto";
  readonly table_carrito: string = "carrito";
  readonly table_estado: string = "estado";
  readonly table_venta: string = "venta";
  readonly table_detalleventa: string = "detalleventa";
  //17-10
  private productosSubject = new BehaviorSubject<any[]>([]); 
  productos$ = this.productosSubject.asObservable();
  //17-10
  listaProductos = new BehaviorSubject([]);

  constructor(private sqlite: SQLite, private toastController: ToastController, private platform: Platform, private alertController: AlertController) { }

  fetchProductos(): Observable<Producto[]>{
    return this.listaProductos.asObservable();
  }
  async presentAlert(titulo:string, msj:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }
  // Crear o abrir la base de datos
  async createDatabase() {
    try {
      if (!this.databaseObj) {
        this.databaseObj = await this.sqlite.create({
          name: this.db_name,
          location: 'default',
        });
        console.log('Database created/opened');
      }
      await this.createTables();  // Crear las tablas después de abrir la base de datos
      await this.createInitialData();  // Insertar los roles iniciales y el usuario admin
      await this.createInitialCategories(); // Insertar categorías iniciales
      await this.createInitialProducts();   // Insertar productos iniciales
      //17-10
      this.loadProducts();
      //17-10
    } catch (e) {
      console.error("Error creating/opening database", e);
    }
  }


  async createTables() {
    try {
      if (this.databaseObj) {
 
        await this.databaseObj.executeSql(`CREATE TABLE IF NOT EXISTS ${this.table_rol} (id_rol INTEGER PRIMARY KEY AUTOINCREMENT, nombre_rol TEXT UNIQUE);`, []);

  
        await this.databaseObj.executeSql(`CREATE TABLE IF NOT EXISTS ${this.table_usuario} (id_usuario INTEGER PRIMARY KEY AUTOINCREMENT, nombre_usuario TEXT, correo TEXT UNIQUE, contraseña TEXT, id_rol INTEGER, FOREIGN KEY (id_rol) REFERENCES ${this.table_rol}(id_rol));`, []);

  
        await this.databaseObj.executeSql(`CREATE TABLE IF NOT EXISTS ${this.table_categoria} (id_categoria INTEGER PRIMARY KEY AUTOINCREMENT, nombre_categoria TEXT UNIQUE);`, []);

 
        await this.databaseObj.executeSql(`CREATE TABLE IF NOT EXISTS ${this.table_producto} (id_producto INTEGER PRIMARY KEY AUTOINCREMENT, nombre_producto TEXT, descripcion_producto TEXT, precio REAL, stock INTEGER, id_categoria INTEGER, imagen BLOB, FOREIGN KEY (id_categoria) REFERENCES ${this.table_categoria}(id_categoria));`, []
);

   
        await this.databaseObj.executeSql(`CREATE TABLE IF NOT EXISTS ${this.table_carrito} (id_carrito INTEGER PRIMARY KEY AUTOINCREMENT, id_usuario INTEGER, id_producto INTEGER, cantidad INTEGER, total REAL, FOREIGN KEY (id_usuario) REFERENCES ${this.table_usuario}(id_usuario), FOREIGN KEY (id_producto) REFERENCES ${this.table_producto}(id_producto));`, []);

    
        await this.databaseObj.executeSql(`CREATE TABLE IF NOT EXISTS estado (id_estado INTEGER PRIMARY KEY AUTOINCREMENT,nombre_estado TEXT UNIQUE);`, []);

      
        await this.databaseObj.executeSql(`CREATE TABLE IF NOT EXISTS venta (id_venta INTEGER PRIMARY KEY AUTOINCREMENT,fecha_venta TEXT,total REAL,id_usuario INTEGER,id_estado INTEGER,FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),FOREIGN KEY (id_estado) REFERENCES estado(id_estado));`, []);

   
        await this.databaseObj.executeSql(`CREATE TABLE IF NOT EXISTS detalle_venta (id_detalle INTEGER PRIMARY KEY AUTOINCREMENT,cantidad INTEGER,subtotal REAL,id_venta INTEGER,id_producto INTEGER,FOREIGN KEY (id_venta) REFERENCES venta(id_venta),FOREIGN KEY (id_producto) REFERENCES producto(id_producto));`, []);

        console.log('Tables created');
      } else {
        console.error("Database object is not initialized.");
      }
    } catch (e) {
      console.error('Error creating tables', e);
    }
  }
//17-10
  async loadProducts() {
    try {
      if (this.databaseObj) {
        const res = await this.databaseObj.executeSql(`SELECT * FROM ${this.table_producto}`, []);
        let products = [];
        for (let i = 0; i < res.rows.length; i++) {
          products.push(res.rows.item(i));
        }
        this.listaProductos.next(products as any);
        this.productosSubject.next(products); // Emitir los productos a través del BehaviorSubject
      } else {
        this.presentToast("error1");
      }
    } catch (e) {
      this.presentToast('Error al cargar producto:'+ JSON.stringify(e));
    }
  }
//17-10

  // Método para insertar datos iniciales
  async createInitialData() {
    try {
      if (this.databaseObj) {
        // Insert roles
        await this.addRole('admin');
        await this.addRole('usuario');

        
        const hashedPassword = '#Ff12345678'; // Puedes implementar hashing para mejor seguridad
        await this.addUser('admin', 'admin@admin.com', hashedPassword, 1); // '1' refiere al rol admin
        console.log('Initial roles and admin user created');
      } else {
        console.error("Database object no fue inicializada.");
      }
    } catch (e) {
      console.error('Error creando el data inicial', e);
    }
  }

  // Método para insertar categorías iniciales
  async createInitialCategories() {
    try {
      if (this.databaseObj) {
        await this.addCategory('Teclados');
        await this.addCategory('Gabinetes');
        await this.addCategory('Audifonos Gamer');
        await this.addCategory('Placas Madre');
        await this.addCategory('Fuentes de Poder');
        await this.addCategory('Memorias RAM');
        await this.addCategory('Procesadores');
        await this.addCategory('Tarjetas de Video');
        await this.addCategory('Monitores');
        console.log('Initial categories created');
      } else {
        console.error("Database object no fue inicializada.");
      }
    } catch (e) {
      console.error('Error creando la categoría inicial', e);
    }
  }
  async urlToBlob(url: string): Promise<Blob> {
    const response = await fetch(url);  // Realiza la solicitud para obtener la imagen
    const blob = await response.blob(); // Convierte la imagen a Blob
    return blob;                        // Retorna el Blob
  }

  // Método para insertar productos iniciales
  async createInitialProducts() {
    try {
      if (this.databaseObj) {
        const TecladoRazerBlackwidowV4 = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/3r2pwux4_8665678f_thumbnail_512.jpg');
        const TecladoRazerHuntsmanMini = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/snyhppat_a721dfd4_thumbnail_512.jpg');
        const TecladoCougarAttackX3 = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/zwy4s9lw_57966fd8_thumbnail_512.png');
        const TecladoLogitechG213Prodigy = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/ppwci9lq_50a0c365_thumbnail_512.jpg');

        const GabineteCorsairiCue = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/88txvj8i_200d227b_thumbnail_512.png');
        const GabineteKolinkVoid = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/6h2lh1by_22f3ee6b_thumbnail_512.jpg');
        const GabineteAerocoolShard = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/_wq4_3_m_0d4a84e2_thumbnail_512.jpg');
        const CoolerMasterCMP520 = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/9mtx0k9j_4b2c460e_thumbnail_512.jpg');

        const AudífonosRazerKrakenKittyQuartz = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/sclrc6tz_57cd70db_thumbnail_512.jpg');
        const AudífonosHyperXCloudStinger2 = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/22c0wthz_45384651_thumbnail_512.jpg');
        const AudífonosHyperXCloud3 = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/ypolap0x_dcedc470_thumbnail_512.jpg');
        const AudífonosLogitechG335 = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/wvwk9x87_25b20800_thumbnail_512.jpg');

        const PlacaMadreMSIA520M_APRO = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/udt3fqxu_27f2e082_thumbnail_512.jpg');
        const PlacaMadreGigabyteAORUXEliteAX = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/yb0mzi8o_57a6a515_thumbnail_512.jpg');
        const PlacaMadreMSI_PRO_Z70_A_MAX = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/mp6q6_y0_7308a861_thumbnail_512.jpg');
        const PlacaMadreGigabyteZ790UD = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/pii2vjbr_7316916c_thumbnail_512.jpg');

        const FuentedePoderVERTEXPX_1000 = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/2wmybndr_f314bfdd_thumbnail_512.png');
        const FuentedePoderSeasonicG12_850GM = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/_bist34q_687bdc0d_thumbnail_512.png');
        const FuentedePoderThermaltakeSmart700W = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/maw61p4d_0b867802_thumbnail_512.jpg');
        const FuentedePoderCLIOATX_700 = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/lf6fjhhg_018eb41a_thumbnail_512.png');

        const MemoriaRamKingstonFURYRenegade = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/bmnbqq4b_89223714_thumbnail_512.png');
        const MemoriaRamDDR4XPG_SPECTRIX_D35G = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/ngcwptyq_563b09c2_thumbnail_512.png');
        const MemoriaRamDDR4KingstonFURYBeast = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/_xiag1e3_7be5c2ae_thumbnail_512.jpg');
        const MemoriaRamDDR4CorsairVengeance = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/r6wg8h5d_806087bc_thumbnail_512.jpg');

        const ProcesadorAMDRyzen7_5800XT = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/1sew7rqf_79eaae73_thumbnail_512.jpg');
        const ProcesadorIntelCorei5_10400 = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/ispzb71k_2e51a77b_thumbnail_512.jpg');
        const ProcesadorIntelCorei9_14900 = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/jyc8ynv8_f836da9b_thumbnail_512.jpg');
        const ProcesadorAMDRyzen7_8700G = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/c725qtut_80d80dd3_thumbnail_512.jpg');

        const ASUSDualNvidiaGeForceRTX407 = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/z4gsemrj_d8c06639_thumbnail_512.png');
        const GigabyteNvidiaGeForceRTX4070Ti = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/rwddzmal_161d7a72_thumbnail_512.png');
        const ZotacNvidiaGeForceRTX4070Ti = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/tuebyjvo_72ce1e1d_thumbnail_512.jpg');
        const ASUSTUFNvidiaGeForceRTX4080SUPER = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/ehvdu6al_fedd27dd_thumbnail_512.png');

        const MonitorSamsungOdysseyG632 = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/fqqvtub3_0cac7e5a_thumbnail_512.jpg');
        const MonitorUltrawideCurvoLG32 = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/jyho6xu9_78536bc0_thumbnail_512.jpg');
        const MonitorCurvoSamsungOdysseyG95C49 = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/tvlpbdac_aa836e31_thumbnail_512.jpg');
        const MonitorGamerCurvoMSI49 = await this.urlToBlob('https://media.spdigital.cl/thumbnails/products/pbgyco0j_7ae2c79b_thumbnail_512.jpg');


        // Asumir que la categoría 'Teclados' tiene id_categoria = 1
     /*   await this.addProduct('Teclado Gamer Razer Huntsman Mini', 'Teclado mecánico de alta precisión para gamers.', 109990, 10, 1, TecladoRazerHuntsmanMini);
        await this.addProduct('Teclado Gamer Razer Blackwidow V4', 'Teclado mecánico con switches verdes Razer.', 239000, 10, 1, TecladoRazerBlackwidowV4);
        await this.addProduct('Teclado Gamer Cougar Attack X3', 'Teclado mecánico para gamers con retroiluminación.', 95990, 10, 1, TecladoCougarAttackX3);
        await this.addProduct('Teclado Gamer LOGITECH G213 Prodigy', 'Teclado para gaming de membrana con RGB.', 53780, 10, 1, TecladoLogitechG213Prodigy);
*/
        // Asumir que la categoría 'Gabinetes' tiene id_categoria = 2
      /*  await this.addProduct('Gabinete Corsair iCue 4000X', 'Gabinete ATX con panel de vidrio templado y RGB.', 119000, 10, 2,         GabineteCorsairiCue);
        await this.addProduct('Gabinete Kolink Void RGB', 'Gabinete con diseño futurista y sistema RGB integrado.', 49570, 10, 2,         GabineteKolinkVoid);
        await this.addProduct('Gabinete Aerocool Shard', 'Gabinete mid-tower con panel frontal iluminado.', 89990, 10, 2,         GabineteAerocoolShard);
        await this.addProduct('Gabinete Cooler Master CMP 520', 'Gabinete con excelente flujo de aire y diseño moderno.', 64490, 10, 2,         CoolerMasterCMP520);
      */  
        // Asumir que la categoría 'Audífonos Gamer' tiene id_categoria = 3
      /*  await this.addProduct('Audífonos Gamer Razer Kraken Kitty Quartz', 'Audífonos con orejas de gato y retroiluminación RGB.', 129990, 10,         3, AudífonosRazerKrakenKittyQuartz);
        await this.addProduct('Audífonos Gamer HyperX Cloud Stinger 2', 'Audífonos ligeros y confortables con sonido envolvente.', 114150, 10,         3, AudífonosHyperXCloudStinger2);
        await this.addProduct('Audífonos Gamer HyperX Cloud 3', 'Audífonos de alto rendimiento con micrófono desmontable.', 63990, 10, 3,         AudífonosHyperXCloud3);
        await this.addProduct('Audífonos Gamer Logitech G335', 'Audífonos con diseño ligero y flexible.', 59990, 10, 3, AudífonosLogitechG335);
        */
        // Asumir que la categoría 'Placas Madre' tiene id_categoria = 4
       /* await this.addProduct('Placa Madre MSI A520 M-A PRO', 'Placa madre con soporte para procesadores AMD Ryzen.', 61990, 10, 4,         PlacaMadreMSIA520M_APRO);
        await this.addProduct('Placa Madre Gigabyte AORUX Elite AX', 'Placa madre con conectividad avanzada para gaming.', 342090, 10, 4,         PlacaMadreGigabyteAORUXEliteAX);
        await this.addProduct('Placa Madre MSI PRO Z70 A MAX', 'Placa madre con soporte para PCIe 4.0 y almacenamiento rápido.', 298080, 10, 4,         PlacaMadreMSI_PRO_Z70_A_MAX);
        await this.addProduct('Placa Madre Gigabyte Z790 UD', 'Placa madre con conectividad avanzada para overclocking.', 270460, 10, 4,         PlacaMadreGigabyteZ790UD);
        */
        // Asumir que la categoría 'Fuentes de Poder' tiene id_categoria = 5
      /*  await this.addProduct('Fuente de Poder VERTEX PX-1000', 'Fuente de poder de 1000W con certificación 80+ Platinum.', 254990, 10, 5, FuentedePoderVERTEXPX_1000);
        await this.addProduct('Fuente de Poder Seasonic G12-850GM', 'Fuente de poder modular de 850W con certificación Gold.', 114990, 10, 5, FuentedePoderSeasonicG12_850GM);
        await this.addProduct('Fuente de Poder Thermaltake Smart 700W', 'Fuente de poder confiable con eficiencia de hasta 85%.', 64990, 10, 5, FuentedePoderThermaltakeSmart700W);
        await this.addProduct('Fuente de Poder CLIO ATX-700', 'Fuente de poder accesible y eficiente para PC de entrada.', 51040, 10, 5, FuentedePoderCLIOATX_700);
*/
        // Asumir que la categoría 'Memorias RAM' tiene id_categoria = 6
    /*    await this.addProduct('Memoria Ram Kingston FURY Renegade', 'Memoria RAM DDR4 de alto rendimiento con iluminación RGB.', 414990, 10, 6, MemoriaRamKingstonFURYRenegade);
        await this.addProduct('Memoria Ram DDR4 XPG SPECTRIX D35G', 'Memoria RAM DDR4 con perfil bajo y RGB.', 38990, 10, 6, MemoriaRamDDR4XPG_SPECTRIX_D35G);
        await this.addProduct('Memoria Ram DDR4 Kingston FURY Beast', 'Memoria RAM DDR4 con overclocking automático.', 99990, 10, 6, MemoriaRamDDR4KingstonFURYBeast);
        await this.addProduct('Memoria Ram DDR4 Corsair Vengeance', 'Memoria RAM confiable con alto rendimiento.', 25990, 10, 6, MemoriaRamDDR4CorsairVengeance);
*/
// Asumir que la categoría 'Procesadores' tiene id_categoria = 7

       // await this.addProduct('Procesador AMD Ryzen™ 7 5800XT', 'Procesador de alto rendimiento con 8 núcleos y 16 hilos.', 399990, 10, 7,         ProcesadorAMDRyzen7_5800XT);
        //await this.addProduct('Procesador Intel® Core™ i5-10400', 'Procesador Intel de 10ª generación para equipos de escritorio.', 162770, 10,         7, ProcesadorIntelCorei5_10400);
        //await this.addProduct('Procesador Intel® Core™ i9-14900', 'Procesador Intel de última generación con 24 núcleos.', 914560, 10, 7,         ProcesadorIntelCorei9_14900);
       // await this.addProduct('Procesador AMD Ryzen™ 7 8700G', 'Procesador AMD con gráficos integrados de alto rendimiento.', 514990, 10, 7,         ProcesadorAMDRyzen7_8700G);
        
        // Asumir que la categoría 'Tarjetas de Video' tiene id_categoria = 8
        //await this.addProduct('ASUS Dual Nvidia GeForce RTX 4070', 'Tarjeta gráfica con tecnología DLSS 3 para gaming 4K.', 899990, 10, 8,         ASUSDualNvidiaGeForceRTX407);
        //await this.addProduct('Gigabyte Nvidia GeForce RTX 4070 Ti', 'Tarjeta gráfica con rendimiento extremo para gamers.', 1049990, 10, 8,         GigabyteNvidiaGeForceRTX4070Ti);
        //await this.addProduct('Zotac Gaming Nvidia GeForce RTX 4070 Ti', 'Tarjeta gráfica con diseño compacto y gran rendimiento.', 1063654,         10, 8, ZotacNvidiaGeForceRTX4070Ti);
        //await this.addProduct('ASUS TUF Nvidia GeForce RTX 4080 SUPER', 'Tarjeta gráfica con soporte para Ray Tracing en tiempo real.',         1399990, 10, 8, ASUSTUFNvidiaGeForceRTX4080SUPER);
        
        // Asumir que la categoría 'Monitores' tiene id_categoria = 9
        //await this.addProduct('Monitor Samsung Odyssey G6 32', 'Monitor curvo de 32 pulgadas con tasa de refresco de 240Hz.', 599000, 10, 9,         MonitorSamsungOdysseyG632);
        //await this.addProduct('Monitor Ultrawide Curvo LG 32', 'Monitor ultrawide con pantalla curva para una experiencia inmersiva.', 470750,         10, 9, MonitorUltrawideCurvoLG32);
        //await this.addProduct('Monitor Curvo Samsung Odyssey G95C 49', 'Monitor ultra curvo de 49 pulgadas para multitarea y gaming.', 991250,         10, 9, MonitorCurvoSamsungOdysseyG95C49);
        //await this.addProduct('Monitor Gamer Curvo MSI 49', 'Monitor curvo con pantalla ultra ancha para gamers.', 1257180, 10, 9,         MonitorGamerCurvoMSI49);

        console.log('Initial products created');
      } else {
        console.error("Database object no fue inicializada.");
      }
    } catch (e) {
      console.error('Error creando los productos iniciales', e);
    }
  }
  
  async getProductsByCategory(id_categoria: number): Promise<any[]> {
    try {
      if (this.databaseObj) {
        this.presentToast("1");
        const res = await this.databaseObj.executeSql(
          `SELECT * FROM ${this.table_producto} WHERE id_categoria = ?`, 
          [id_categoria]
        );
        const products = [];
        this.presentToast("2");
        for (let i = 0; i < res.rows.length; i++) {
          products.push(res.rows.item(i));
        }
        this.presentToast("3");
        this.listaProductos.next(products as any);
        return products;
      } else {
        console.error("Database object is not initialized.");
        return [];
      }
    } catch (e) {
      console.error('Error obteniendo productos', e);
      return [];
    }
  }



  // Método para insertar datos en la tabla rol
  async addRole(nombre_rol: string) {
    try {
      if (this.databaseObj) {
        await this.databaseObj.executeSql(`INSERT INTO ${this.table_rol} (nombre_rol) VALUES (?)`, [nombre_rol]);
        console.log('Role agregado');
      } else {
        console.error("Database object no fue inicializada.");
      }
    } catch (e) {
      console.error('Error anadiendo el rol', e);
    }
  }

  // Método para insertar datos en la tabla usuario
  async addUser(nombre_usuario: string, correo: string, contraseña: string, id_rol: number) {
    try {
      if (this.databaseObj) {
        await this.databaseObj.executeSql(`INSERT INTO ${this.table_usuario} (nombre_usuario, correo, contraseña, id_rol) VALUES (?, ?, ?, ?)`, [nombre_usuario, correo, contraseña, id_rol]);
        console.log('Usuario agregado');
      } else {
        console.error("Database object no fue inicializada.");
      }
    } catch (e) {
      console.error('Error anadiendo al usuario', e);
    }
  }

  // Método para insertar datos en la tabla categoría
  async addCategory(nombre_categoria: string) {
    try {
      if (this.databaseObj) {
        await this.databaseObj.executeSql(`INSERT INTO ${this.table_categoria} (nombre_categoria) VALUES (?)`, [nombre_categoria]);
        console.log('Category anadida');
      } else {
        console.error("Database object no fue inicializada.");
      }
    } catch (e) {
      console.error('Error anadiendo la categoria', e);
    }
  }

  //Método para buscar le id de una categoria
  async buscarCat(categoria: string): Promise<any> {
    try {
      if (this.databaseObj) {
        const res = await this.databaseObj.executeSql(`SELECT id_categoria FROM ${this.table_categoria} WHERE nombre_categoria = ?`, [categoria]);

        if (res.rows.length > 0) {
          // // Categoria encontrada
          return res.rows.item(0);
        }
        return null; // Categoria no encontrado
      } else {
        console.error("No se ha encontrado la categoria.");
      }
    } catch (e) {
      this.presentAlert('Error validando categoria',JSON.stringify(e));
      return null;
    }
  }

  // Método para insertar datos en la tabla producto
  async addProduct(nombre_producto: string, descripcion_producto: string, precio: number, id_categoria: number, imagen: Blob | null) {
    try {
      this.presentToast("1");
      if (this.databaseObj) {
        this.presentToast("2");
        await this.databaseObj.executeSql(
          `INSERT INTO ${this.table_producto} (nombre_producto,descripcion_producto, precio, id_categoria, imagen) VALUES (?, ?, ?, ?, ?)`,
          [nombre_producto,descripcion_producto, precio, id_categoria, imagen]
        );
        this.loadProducts();
        this.presentToast('Producto agregado con éxito');
      } else {
        this.presentToast("Database object no fue inicializada.");
      }
    } catch (e) {
      this.presentToast('Error al agregar producto:'+ JSON.stringify(e));
    }
  }

 async modificarProducto(id_producto: string, nombre_producto: string, descripcion_producto: string, precio: number, id_categoria: number, imagen: Blob | null) {
  
    if (this.databaseObj) {
      await this.databaseObj.executeSql(
      'UPDATE producto SET nombre_producto = ?, descripcion_producto = ?, precio = ?, id_categoria = ? WHERE //id_producto = ?', 
      [nombre_producto, descripcion_producto, precio, id_categoria, id_producto]
      
    ).then(() => {
      this.presentAlert("Modificar", "Producto Modificado");
      this.loadProducts(); 
    }).catch((e: any) => {
      this.presentAlert("Modificar", "Error: " + JSON.stringify(e));
    });
  }
}
  
  
  

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
  

  // Validar usuario para el login
  async validarUsuario(nombre_usuario: string, contraseña: string): Promise<any> {
    try {
      if (this.databaseObj) {
        const res = await this.databaseObj.executeSql(`SELECT * FROM ${this.table_usuario} WHERE nombre_usuario = ? AND contraseña = ?`, [nombre_usuario, contraseña]);

        if (res.rows.length > 0) {
          return res.rows.item(0); // Usuario encontrado
        }
        return null; // Usuario no encontrado
      } else {
        console.error("la base de datos no fue inicializada.");
      }
    } catch (e) {
      console.error('Error validando usuario', e);
      return null;
    }
  }

 // Método para agregar productos al carrito
 async addToCart(userId: number, productId: number, quantity: number) {
  try {
    if (this.databaseObj) {
      const product = await this.getProductById(productId);
      if (product) {
        const total = product.precio * quantity;
        
        // Verificar si el producto ya está en el carrito
        const existingItem = await this.getCartItem(userId, productId);
        if (existingItem) {
          // Si ya existe, actualizar la cantidad
          const newQuantity = existingItem.cantidad + quantity;
          await this.updateCartItem(userId, productId, newQuantity);
          console.log('Cantidad actualizada en el carrito');
        } else {
          // Si no existe, agregarlo al carrito
          await this.databaseObj.executeSql(
            `INSERT INTO ${this.table_carrito} (id_usuario, id_producto, cantidad, total) VALUES (?, ?, ?, ?)`,
            [userId, productId, quantity, total]
          );
          console.log('Producto agregado al carrito');
        }
      } else {
        console.error('Producto no encontrado');
      }
    } else {
      console.error("Database object no fue inicializada.");
    }
  } catch (e) {
    console.error('Error añadiendo el producto', e);
  }
}
//17-10
async getCategories(): Promise<any[]> {
  try {
    if (this.databaseObj) {
      const res = await this.databaseObj.executeSql(`SELECT * FROM ${this.table_categoria}`, []);
      const categories = [];
      for (let i = 0; i < res.rows.length; i++) {
        categories.push(res.rows.item(i));  // Agregar cada categoría al array
      }
      return categories;
    } else {
      this.presentToast("Database object no fue inicializada.");
      return [];
    }
  } catch (e) {
    this.presentToast('Error al obtener categoria:'+ JSON.stringify(e));
    return [];
  }
}
//17-10

// Método para obtener un producto por ID
async getProductById(productId: number): Promise<any> {
  try {
    
    if (this.databaseObj) {
      const res = await this.databaseObj.executeSql(
        `SELECT * FROM ${this.table_producto} WHERE id_producto = ?`,
        [productId]
      );
      return res.rows.length > 0 ? res.rows.item(0) : null; // Devuelve el producto si se encuentra
    } else {
      console.error("Database object no fue inicializada.");
      return null;
    }
  } catch (e) {
    console.error('Error encontrando el producto por id', e);
    return null;
  }
}

// Método para obtener un item específico del carrito
async getCartItem(userId: number, productId: number): Promise<any> {
  try {
    if (this.databaseObj) {
      const res = await this.databaseObj.executeSql(
        `SELECT * FROM ${this.table_carrito} WHERE id_usuario = ? AND id_producto = ?`,
        [userId, productId]
      );
      return res.rows.length > 0 ? res.rows.item(0) : null; // Devuelve el item si se encuentra
    } else {
      console.error("Database object no fue inicializada.");
      return null;
    }
  } catch (e) {
    console.error('Error encontrando el item del carrito', e);
    return null;
  }
}

// Método para actualizar la cantidad de un producto en el carrito
async updateCartItem(userId: number, productId: number, quantity: number): Promise<void> {
  try {
    if (this.databaseObj) {
      const query = `UPDATE ${this.table_carrito} SET cantidad = ? WHERE id_usuario = ? AND id_producto = ?`;
      await this.databaseObj.executeSql(query, [quantity, userId, productId]);
      console.log('Cantidad actualizada en el carrito');
    } else {
      console.error("Database object no fue inicializada.");
    }
  } catch (e) {
    console.error('Error actualizando la cantidad del carrito', e);
  }
}

// Método para eliminar productos del carrito
async removeFromCart(userId: number, productId: number) {
  try {
    if (this.databaseObj) {
      // Eliminar el producto del carrito donde coincidan el ID del usuario y el ID del producto
      const result = await this.databaseObj.executeSql(
        `DELETE FROM ${this.table_carrito} WHERE id_usuario = ? AND id_producto = ?`,
        [userId, productId]
      );

      if (result.rowsAffected > 0) {
        console.log('Producto eliminado del carrito');
      } else {
        console.log('No se encontró el producto en el carrito');
      }
    } else {
      console.error("Database object no fue inicializada.");
    }
  } catch (e) {
    console.error('Error eliminando el producto del carrito', e);
  }
}

// Método para obtener los productos del carrito
async getCartItems(userId: number): Promise<any[]> {
  try {
    if (this.databaseObj) {
      const res = await this.databaseObj.executeSql(
        `SELECT c.*, p.nombre_producto, p.precio FROM ${this.table_carrito} c JOIN ${this.table_producto} p ON c.id_producto = p.id_producto WHERE c.id_usuario = ?`,
        [userId]
      );
      let cartItems = [];
      for (let i = 0; i < res.rows.length; i++) {
        cartItems.push(res.rows.item(i));
      }
      return cartItems;
    } else {
      console.error("Database object no fue inicializada.");
      return [];
    }
  } catch (e) {
    console.error('Error encontrando el item del carrito', e);
    return [];
  }
}

}