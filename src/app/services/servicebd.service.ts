import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

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
        await this.databaseObj.executeSql(`CREATE TABLE IF NOT EXISTS ${this.table_producto} (id_producto INTEGER PRIMARY KEY AUTOINCREMENT, nombre_producto TEXT, precio REAL, stock INTEGER, id_categoria INTEGER, FOREIGN KEY (id_categoria) REFERENCES ${this.table_categoria}(id_categoria));`, []);

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

  // Método para insertar productos iniciales
  async createInitialProducts() {
    try {
      if (this.databaseObj) {
        // Asumir que la categoría 'Teclados' tiene id_categoria = 1
        await this.addProduct('Teclado Gamer Razer Huntsman Mini', 109990, 10, 1);
        await this.addProduct('Teclado Gamer Razer Blackwidow V4', 239000, 10, 1);
        await this.addProduct('Teclado Gamer Cougar Attack X3', 95990, 10, 1);
        await this.addProduct('Teclado Gamer LOGITECH G213 Prodigy', 53780, 10, 1);

        // Asumir que la categoría 'Gabinetes' tiene id_categoria = 2
        await this.addProduct('Gabinete Corsair iCue 4000X', 119000, 10, 2);
        await this.addProduct('Gabinete Kolink Void RGB', 49570, 10, 2);
        await this.addProduct('Gabinete Aerocool Shard', 89990, 10, 2);
        await this.addProduct('Gabinete Cooler Master CMP 520', 64490, 10, 2);

        // Asumir que la categoría 'Audífonos Gamer' tiene id_categoria = 3
        await this.addProduct('Audífonos Gamer Razer Kraken Kitty Quartz', 129990, 10, 3);
        await this.addProduct('Audífonos Gamer HyperX Cloud Stinger 2', 114150, 10, 3);
        await this.addProduct('Audífonos Gamer HyperX Cloud 3', 63990, 10, 3);
        await this.addProduct('Audífonos Gamer Logitech G335', 59990, 10, 3);

        // Asumir que la categoría 'Placas Madre' tiene id_categoria = 4
        await this.addProduct('Placa Madre MSI A520 M-A PRO', 61990, 10, 4);
        await this.addProduct('Placa Madre Gigabyte AORUX Elite AX', 342090, 10, 4);
        await this.addProduct('Placa Madre MSI PRO Z70 A MAX', 298080, 10, 4);
        await this.addProduct('Placa Madre Gigabyte Z790 UD', 270460, 10, 4);

        // Asumir que la categoría 'Fuentes de Poder' tiene id_categoria = 5
        await this.addProduct('Fuente de Poder VERTEX PX-1000', 254990, 10, 5);
        await this.addProduct('Fuente de Poder Seasonic G12-850GM', 114990, 10, 5);
        await this.addProduct('Fuente de Poder Thermaltake Smart 700W', 64990, 10, 5);
        await this.addProduct('Fuente de Poder CLIO ATX-700', 51040, 10, 5);

        // Asumir que la categoría 'Memorias RAM' tiene id_categoria = 6
        await this.addProduct('Memoria Ram Kingston FURY Renegade', 414990, 10, 6);
        await this.addProduct('Memoria Ram DDR4 XPG SPECTRIX D35G', 38990, 10, 6);
        await this.addProduct('Memoria Ram DDR4 Kingston FURY Beast', 99990, 10, 6);
        await this.addProduct('Memoria Ram DDR4 Corsair Vengeance', 25990, 10, 6);

        // Asumir que la categoría 'Procesadores' tiene id_categoria = 7
        await this.addProduct('Procesador AMD Ryzen™ 7 5800XT', 399990, 10, 7);
        await this.addProduct('Procesador Intel® Core™ i5-10400', 162770, 10, 7);
        await this.addProduct('Procesador Intel® Core™ i9-14900', 914560, 10, 7);
        await this.addProduct('Procesador AMD Ryzen™ 7 8700G', 514990, 10, 7);

        // Asumir que la categoría 'Tarjetas de Video' tiene id_categoria = 7
        await this.addProduct('ASUS Dual Nvidia GeForce RTX 4070', 899990, 10, 7);
        await this.addProduct('Gigabyte Nvidia GeForce RTX 4070 Ti', 1049990, 10, 7);
        await this.addProduct('Zotac Gaming Nvidia GeForce RTX 4070 Ti', 1063654, 10, 7);
        await this.addProduct('ASUS TUF Nvidia GeForce RTX 4080 SUPER', 1399990, 10, 7);

        // Asumir que la categoría 'Monitores' tiene id_categoria = 9
        await this.addProduct('Monitor Samsung Odyssey G6 32', 599000, 10, 9);
        await this.addProduct('Monitor Ultrawide Curvo LG 32', 470750, 10, 9);
        await this.addProduct('Monitor Curvo Samsung Odyssey G95C 49', 991250, 10, 9);
        await this.addProduct('Monitor Gamer Curvo MSI 49', 1257180, 10, 9);

        console.log('Initial products created');
      } else {
        console.error("Database object no fue inicializada.");
      }
    } catch (e) {
      console.error('Error creando los productos iniciales', e);
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

  // Método para insertar datos en la tabla producto
  async addProduct(nombre_producto: string, precio: number, stock: number, id_categoria: number) {
    try {
      if (this.databaseObj) {
        await this.databaseObj.executeSql(`INSERT INTO ${this.table_producto} (nombre_producto, precio, stock, id_categoria) VALUES (?, ?, ?, ?)`, [nombre_producto, precio, stock, id_categoria]);
        console.log('Product added');
      } else {
        console.error("Database object no fue inicializada.");
      }
    } catch (e) {
      console.error('Error anadiendo el producto', e);
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
}
