import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs'; // Asegúrate de que Observable está importado
@Injectable({
  providedIn: 'root',
})
export class ServicebdService {
  private databaseObj: SQLiteObject | null = null; // Inicializar como null
  readonly db_name: string = "gadgetzone_db.db";
  readonly table_rol: string = "rol";
  readonly table_usuario: string = "usuario";
  readonly table_categoria: string = "categoria";
  readonly table_producto: string = "producto";
  readonly table_carrito: string = "carrito";
  
  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private sqlite: SQLite) { }

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
    } catch (e) {
      console.error("Error creating/opening database", e);
    }
  }

  // Crear las tablas
  async createTables() {
    try {
      if (this.databaseObj) {
        // Crear tabla rol
        await this.databaseObj.executeSql(`CREATE TABLE IF NOT EXISTS ${this.table_rol} (id_rol INTEGER PRIMARY KEY AUTOINCREMENT, nombre_rol TEXT UNIQUE);`, []);

        // Crear tabla usuario
        await this.databaseObj.executeSql(`CREATE TABLE IF NOT EXISTS ${this.table_usuario} (id_usuario INTEGER PRIMARY KEY AUTOINCREMENT, nombre_usuario TEXT, correo TEXT UNIQUE, contraseña TEXT, id_rol INTEGER, FOREIGN KEY (id_rol) REFERENCES ${this.table_rol}(id_rol));`, []);

        // Crear tabla categoría
        await this.databaseObj.executeSql(`CREATE TABLE IF NOT EXISTS ${this.table_categoria} (id_categoria INTEGER PRIMARY KEY AUTOINCREMENT, nombre_categoria TEXT UNIQUE);`, []);

        // Crear tabla producto
        await this.databaseObj.executeSql(`CREATE TABLE IF NOT EXISTS ${this.table_producto} (id_producto INTEGER PRIMARY KEY AUTOINCREMENT, nombre_producto TEXT, precio REAL, stock INTEGER, id_categoria INTEGER, imagen BLOB, FOREIGN KEY (id_categoria) REFERENCES ${this.table_categoria}(id_categoria));`, []);

        // Crear tabla carrito
        await this.databaseObj.executeSql(`CREATE TABLE IF NOT EXISTS ${this.table_carrito} (id_carrito INTEGER PRIMARY KEY AUTOINCREMENT, id_usuario INTEGER, id_producto INTEGER, cantidad INTEGER, total REAL, FOREIGN KEY (id_usuario) REFERENCES ${this.table_usuario}(id_usuario), FOREIGN KEY (id_producto) REFERENCES ${this.table_producto}(id_producto));`, []);

        console.log('Tables created');
      } else {
        console.error("Database object is not initialized.");
      }
    } catch (e) {
      console.error('Error creating tables', e);
    }
  }

  // Método para insertar datos iniciales
  async createInitialData() {
    try {
      if (this.databaseObj) {
        // Insert roles
        await this.addRole('admin');
        await this.addRole('usuario');

        // Insert admin user with predefined credentials
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

  

  async createInitialProducts() {
    try {
      if (this.databaseObj) {
        // Convertir las imágenes de URL a blob desde la carpeta local
        const TecladoRazerBlackwidowV4 = 'assets/images/TecladoRazerBlackwidowV4';     
        const TecladoRazerHuntsmanMini= 'assets/images/TecladoRazerHuntsmanMini'   
        const TecladoCougarAttackX3 ='assets/images/TecladoCougarAttackX3.jpg';
        const TecladoLogitechG213Prodigy ='assets/images/TecladoLogitechG213Prodigy.jpg';
    
        const GabineteCorsairiCue = 'assets/images/GabineteCorsairiCue.jpg';
        const GabineteKolinkVoid = 'assets/images/GabineteKolinkVoid.jpg';
        const GabineteAerocoolShard ='assets/images/GabineteAerocoolShard.jpg';
        const CoolerMasterCMP520 = 'assets/images/CoolerMasterCMP520.jpg';
    
        const AudífonosRazerKrakenKittyQuartz = 'assets/images/AudífonosRazerKrakenKittyQuartz.jpg';
        const AudífonosHyperXCloudStinger2 = 'assets/images/AudífonosHyperXCloudStinger2.jpg';
        const AudífonosHyperXCloud3 = 'assets/images/AudífonosHyperXCloud3.jpg';
        const AudífonosLogitechG335 = 'assets/images/AudífonosLogitechG335.jpg';
    
        const PlacaMadreMSIA520M_APRO = 'assets/images/PlacaMadreMSIA520M_APRO.jpg';
        const PlacaMadreGigabyteAORUXEliteAX = 'assets/images/PlacaMadreGigabyteAORUXEliteAX.jpg';
        const PlacaMadreMSI_PRO_Z70_A_MAX = 'assets/images/PlacaMadreMSI_PRO_Z70_A_MAX.jpg';
        const PlacaMadreGigabyteZ790UD = 'assets/images/PlacaMadreGigabyteZ790UD.jpg';
    
        const FuentedePoderVERTEXPX_1000 = 'assets/images/FuentedePoderVERTEXPX_1000.png';
        const FuentedePoderSeasonicG12_850GM = 'assets/images/FuentedePoderSeasonicG12_850GM.png';
        const FuentedePoderThermaltakeSmart700W = 'assets/images/FuentedePoderThermaltakeSmart700W.jpg';
        const FuentedePoderCLIOATX_700 = 'assets/images/FuentedePoderCLIOATX_700.png';
    
        const MemoriaRamKingstonFURYRenegade = 'assets/images/MemoriaRamKingstonFURYRenegade.png';
        const MemoriaRamDDR4XPG_SPECTRIX_D35G = 'assets/images/MemoriaRamDDR4XPG_SPECTRIX_D35G.png';
        const MemoriaRamDDR4KingstonFURYBeast = 'assets/images/MemoriaRamDDR4KingstonFURYBeast.jpg';
        const MemoriaRamDDR4CorsairVengeance = 'assets/images/MemoriaRamDDR4CorsairVengeance.jpg';
    
        const ProcesadorAMDRyzen7_5800XT = 'assets/images/ProcesadorAMDRyzen7_5800XT.jpg';
        const ProcesadorIntelCorei5_10400 = 'assets/images/ProcesadorIntelCorei5_10400.jpg';
        const ProcesadorIntelCorei9_14900 = 'assets/images/ProcesadorIntelCorei9_14900.jpg';
        const ProcesadorAMDRyzen7_8700G = 'assets/images/ProcesadorAMDRyzen7_8700G.jpg';
    
        const ASUSDualNvidiaGeForceRTX407 = 'assets/images/ASUSDualNvidiaGeForceRTX407.png';
        const GigabyteNvidiaGeForceRTX4070Ti = 'assets/images/GigabyteNvidiaGeForceRTX4070Ti.png';
        const ZotacNvidiaGeForceRTX4070Ti = 'assets/images/ZotacNvidiaGeForceRTX4070Ti.jpg';
        const ASUSTUFNvidiaGeForceRTX4080SUPER = 'assets/images/ASUSTUFNvidiaGeForceRTX4080SUPER.png';
    
        const MonitorSamsungOdysseyG632 = 'assets/images/MonitorSamsungOdysseyG632.jpg';
        const MonitorUltrawideCurvoLG32 = 'assets/images/MonitorUltrawideCurvoLG32.jpg';
        const MonitorCurvoSamsungOdysseyG95C49 = 'assets/images/MonitorCurvoSamsungOdysseyG95C49.jpg';
        const MonitorGamerCurvoMSI49 = 'assets/images/MonitorGamerCurvoMSI49.jpg';
    
        // Agregar productos a la base de datos
        await this.addProduct('Teclado Gamer Razer Blackwidow V4', 239000, 10, 1, TecladoRazerBlackwidowV4);
        await this.addProduct('Teclado Gamer Razer Huntsman Mini', 109990, 10, 1, TecladoRazerHuntsmanMini);  
        await this.addProduct('Teclado Gamer Cougar Attack X3', 95990, 10, 1, TecladoCougarAttackX3);
        await this.addProduct('Teclado Gamer Logitech G213 Prodigy', 89990, 10, 1, TecladoLogitechG213Prodigy);
    
        await this.addProduct('Gabinete Gamer Corsair iCue', 69990, 10, 2, GabineteCorsairiCue);
        await this.addProduct('Gabinete Gamer Kolink Void', 49990, 10, 2, GabineteKolinkVoid);
        await this.addProduct('Gabinete Gamer Aerocool Shard', 45990, 10, 2, GabineteAerocoolShard);
        await this.addProduct('Gabinete Gamer Cooler Master CMP520', 79990, 10, 2, CoolerMasterCMP520);
    
        await this.addProduct('Audífonos Gamer Razer Kraken Kitty Quartz', 69990, 10, 3, AudífonosRazerKrakenKittyQuartz);
        await this.addProduct('Audífonos Gamer HyperX Cloud Stinger 2', 64990, 10, 3, AudífonosHyperXCloudStinger2);
        await this.addProduct('Audífonos Gamer HyperX Cloud 3', 59990, 10, 3, AudífonosHyperXCloud3);
        await this.addProduct('Audífonos Gamer Logitech G335', 74990, 10, 3, AudífonosLogitechG335);
    
        await this.addProduct('Placa Madre MSI A520M-A PRO', 49990, 10, 4, PlacaMadreMSIA520M_APRO);
        await this.addProduct('Placa Madre Gigabyte AORUS Xtreme AX', 69990, 10, 4, PlacaMadreGigabyteAORUXEliteAX);
        await this.addProduct('Placa Madre MSI PRO Z70-A MAX', 39990, 10, 4, PlacaMadreMSI_PRO_Z70_A_MAX);
        await this.addProduct('Placa Madre Gigabyte Z790 UD', 89990, 10, 4, PlacaMadreGigabyteZ790UD);
    
        await this.addProduct('Fuente de Poder VERTEX PX 1000', 79990, 10, 5, FuentedePoderVERTEXPX_1000);
        await this.addProduct('Fuente de Poder Seasonic G12 850GM', 69990, 10, 5, FuentedePoderSeasonicG12_850GM);
        await this.addProduct('Fuente de Poder Thermaltake Smart 700W', 59990, 10, 5, FuentedePoderThermaltakeSmart700W);
        await this.addProduct('Fuente de Poder CLIO ATX 700', 49990, 10, 5, FuentedePoderCLIOATX_700);
    
        await this.addProduct('Memoria RAM Kingston FURY Renegade', 64990, 10, 6, MemoriaRamKingstonFURYRenegade);
        await this.addProduct('Memoria RAM DDR4 XPG SPECTRIX D35G', 59990, 10, 6, MemoriaRamDDR4XPG_SPECTRIX_D35G);
        await this.addProduct('Memoria RAM DDR4 Kingston FURY Beast', 49990, 10, 6, MemoriaRamDDR4KingstonFURYBeast);
        await this.addProduct('Memoria RAM DDR4 Corsair Vengeance', 49990, 10, 6, MemoriaRamDDR4CorsairVengeance);
    
        await this.addProduct('Procesador AMD Ryzen 7 5800XT', 329990, 10, 7, ProcesadorAMDRyzen7_5800XT);
        await this.addProduct('Procesador Intel Core i5 10400', 149990, 10, 7, ProcesadorIntelCorei5_10400);
        await this.addProduct('Procesador Intel Core i9 14900', 379990, 10, 7, ProcesadorIntelCorei9_14900);
        await this.addProduct('Procesador AMD Ryzen 7 8700G', 239990, 10, 7, ProcesadorAMDRyzen7_8700G);
    
        await this.addProduct('ASUS Dual Nvidia GeForce RTX 4070', 329990, 10, 8, ASUSDualNvidiaGeForceRTX407);
        await this.addProduct('Gigabyte Nvidia GeForce RTX 4070 Ti', 349990, 10, 8, GigabyteNvidiaGeForceRTX4070Ti);
        await this.addProduct('Zotac Nvidia GeForce RTX 4070 Ti', 339990, 10, 8, ZotacNvidiaGeForceRTX4070Ti);
        await this.addProduct('ASUS TUF Nvidia GeForce RTX 4080 SUPER', 449990, 10, 8, ASUSTUFNvidiaGeForceRTX4080SUPER);
    
        await this.addProduct('Monitor Samsung Odyssey G6 32"', 99990, 10, 9, MonitorSamsungOdysseyG632);
        await this.addProduct('Monitor Ultrawide Curvo LG 32"', 79990, 10, 9, MonitorUltrawideCurvoLG32);
        await this.addProduct('Monitor Curvo Samsung Odyssey G95C 49"', 129990, 10, 9, MonitorCurvoSamsungOdysseyG95C49);
        await this.addProduct('Monitor Gamer Curvo MSI 49"', 149990, 10, 9, MonitorGamerCurvoMSI49);
      }
    } catch (error) {
      console.error('Error creating initial products:', error);
    }
  }
  
  // Función para convertir URL en Blob
  async urlToBlob(url: string): Promise<Blob> {
    const response = await fetch(url);
    const blob = await response.blob();
    return blob;
  }
  
  async getProductsByCategory(id_categoria: number): Promise<any[]> {
    try {
      if (this.databaseObj) {
        const res = await this.databaseObj.executeSql(
          `SELECT * FROM ${this.table_producto} WHERE id_categoria = ?`, 
          [id_categoria]
        );
        const products = [];
        for (let i = 0; i < res.rows.length; i++) {
          products.push(res.rows.item(i));
        }
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
      // Verificar si el rol ya existe
      const existingRole = await this.databaseObj.executeSql(`SELECT * FROM ${this.table_rol} WHERE nombre_rol = ?`, [nombre_rol]);

      if (existingRole.rows.length > 0) {
        console.log('El rol ya existe');
        return; // El rol ya existe, no intentar insertarlo
      }

      // Si el rol no existe, insertarlo
      await this.databaseObj.executeSql(`INSERT INTO ${this.table_rol} (nombre_rol) VALUES (?)`, [nombre_rol]);
      console.log('Rol agregado');
    } else {
      console.error("Database object no fue inicializada.");
    }
  } catch (e) {
    const error = e as Error; // Convertir el error a tipo 'Error'
    console.error('Error añadiendo el rol', error.message, error.stack);
  }
}



// Método para insertar datos en la tabla usuario
async addUser(nombre_usuario: string, correo: string, contraseña: string, id_rol: number) {
  try {
    if (this.databaseObj) {
      // Verificar si el usuario ya existe basado en el nombre de usuario o correo
      const existingUser = await this.databaseObj.executeSql(
        `SELECT * FROM ${this.table_usuario} WHERE nombre_usuario = ? OR correo = ?`, 
        [nombre_usuario, correo]
      );

      if (existingUser.rows.length > 0) {
        console.log('El usuario o el correo ya existen');
        return; // Si el usuario o correo ya existen, no intentar insertarlos
      }

      // Si el usuario no existe, insertarlo
      await this.databaseObj.executeSql(
        `INSERT INTO ${this.table_usuario} (nombre_usuario, correo, contraseña, id_rol) VALUES (?, ?, ?, ?)`, 
        [nombre_usuario, correo, contraseña, id_rol]
      );
      console.log('Usuario agregado');
    } else {
      console.error("Database object no fue inicializada.");
    }
  } catch (e) {
    const error = e as Error; // Convertir el error a tipo 'Error'
    console.error('Error añadiendo al usuario', error.message, error.stack);
  }
}


// Método para insertar datos en la tabla categoría
async addCategory(nombre_categoria: string) {
  try {
    if (this.databaseObj) {
      // Verificar si la categoría ya existe
      const existingCategory = await this.databaseObj.executeSql(
        `SELECT * FROM ${this.table_categoria} WHERE nombre_categoria = ?`, 
        [nombre_categoria]
      );

      if (existingCategory.rows.length > 0) {
        console.log('La categoría ya existe');
        return; // Si la categoría ya existe, no intentar insertarla
      }

      // Si la categoría no existe, insertarla
      await this.databaseObj.executeSql(
        `INSERT INTO ${this.table_categoria} (nombre_categoria) VALUES (?)`, 
        [nombre_categoria]
      );
      console.log('Categoría añadida');
    } else {
      console.error("Database object no fue inicializada.");
    }
  } catch (e) {
    const error = e as Error; // Convertir el error a tipo 'Error'
    console.error('Error añadiendo la categoría', error.message, error.stack);
  }
}


async addProduct(nombre_producto: string, precio: number, stock: number, id_categoria: number, imagePath: string) {
  try {
    if (this.databaseObj) {
      // Almacenar la ruta de la imagen directamente
      await this.databaseObj.executeSql(
        `INSERT INTO ${this.table_producto} (nombre_producto, precio, stock, id_categoria, imagen) VALUES (?, ?, ?, ?, ?)`,
        [nombre_producto, precio, stock, id_categoria, imagePath]
      );
      console.log('Producto agregado');
    } else {
      console.error("Database object no fue inicializada.");
    }
  } catch (e) {
    console.error('Error añadiendo el producto', e);
  }
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
async getCurrentUser(email: string): Promise<void> {
  try {
    if (this.databaseObj) {
      const result = await this.databaseObj.executeSql(
        `SELECT * FROM ${this.table_usuario} WHERE correo = ?`, [email]
      );

      if (result.rows.length > 0) {
        const user = result.rows.item(0);
        this.currentUserSubject.next(user); // Emite el usuario actual
      } else {
        console.error('Usuario no encontrado');
      }
    }
  } catch (e) {
    console.error('Error obteniendo usuario', e);
  }
}

getCurrentUserObservable(): Observable<any> {
  return this.currentUserSubject.asObservable();
}
}


