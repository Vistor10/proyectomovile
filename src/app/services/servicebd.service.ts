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
  readonly db_name: string = "gadgetzone_db5.db";
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
  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private sqlite: SQLite, private toastController: ToastController, private platform: Platform, private alertController: AlertController) { }
  private historialComprasSubject = new BehaviorSubject<any[]>([]);
  historialCompras$ = this.historialComprasSubject.asObservable();
  private ventasSubject = new BehaviorSubject<any[]>([]); // Observable para ventas
  ventas$ = this.ventasSubject.asObservable(); // Exponer el observable para suscripciones

  private detallesVentaSubject = new BehaviorSubject<any[]>([]);
  detallesVenta$ = this.detallesVentaSubject.asObservable();
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

  
        await this.databaseObj.executeSql(`CREATE TABLE IF NOT EXISTS ${this.table_categoria} (id_categoria INTEGER PRIMARY KEY AUTOINCREMENT, nombre_categoria TEXT UNIQUE,imagen BLOB);`, []);

 
        await this.databaseObj.executeSql(`CREATE TABLE IF NOT EXISTS ${this.table_producto} (id_producto INTEGER PRIMARY KEY AUTOINCREMENT, nombre_producto TEXT, descripcion_producto TEXT, precio REAL, stock INTEGER, id_categoria INTEGER, imagen BLOB, status INTEGER DEFAULT 1, FOREIGN KEY (id_categoria) REFERENCES ${this.table_categoria}(id_categoria));`, []
);

   
        await this.databaseObj.executeSql(`CREATE TABLE IF NOT EXISTS ${this.table_carrito} (id_carrito INTEGER PRIMARY KEY AUTOINCREMENT, id_usuario INTEGER, id_producto INTEGER, cantidad INTEGER, total REAL, FOREIGN KEY (id_usuario) REFERENCES ${this.table_usuario}(id_usuario), FOREIGN KEY (id_producto) REFERENCES ${this.table_producto}(id_producto));`, []);

        await this.databaseObj.executeSql(`CREATE TABLE IF NOT EXISTS venta (id_venta INTEGER PRIMARY KEY AUTOINCREMENT,fecha_venta TEXT,total REAL,id_usuario INTEGER,id_estado INTEGER,FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario));`, []);

   
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
  
  async urlToBlob(url: string): Promise<Blob> {
    const response = await fetch(url);  // Realiza la solicitud para obtener la imagen
    const blob = await response.blob(); // Convierte la imagen a Blob
    return blob;                        // Retorna el Blob
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
       // this.presentToast("3");
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
  async getAllProducts(): Promise<any[]> {
    try {
      if (this.databaseObj) {
        // Solo obtener productos con status = 1 (activos)
        const res = await this.databaseObj.executeSql('SELECT * FROM producto WHERE status = ?', [1]);
        const products = [];
        for (let i = 0; i < res.rows.length; i++) {
          products.push(res.rows.item(i));
        }
        return products;
      } else {
        this.presentAlert("Error", "Database object no fue inicializada.");
        return [];
      }
    } catch (e) {
      this.presentAlert('Error', 'Error obteniendo productos: ' + JSON.stringify(e));
      return [];
    }
  }
  
 /* async getAllProducts(): Promise<any[]> {
    try {
      if (this.databaseObj) {
        const res = await this.databaseObj.executeSql('SELECT * FROM producto', []);
        const products = [];
        for (let i = 0; i < res.rows.length; i++) {
          products.push(res.rows.item(i));
        }
        return products;
      } else {
        this.presentAlert("Error", "Database object no fue inicializada.");
        return [];
      }
    } catch (e) {
      this.presentAlert('Error', 'Error obteniendo productos: ' + JSON.stringify(e));
      return [];
    }
  }
    */



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
  async addCategory(nombre_categoria: string, imagen: Blob) {
    try {
      if (this.databaseObj) {
        await this.databaseObj.executeSql(`
          INSERT INTO categoria (nombre_categoria, imagen) VALUES (?, ?)
        `, [nombre_categoria, imagen]);
        this.presentToast('Categoría agregada con éxito');
      } else {
        this.presentToast("Database object no fue inicializada.");
      }
    } catch (e) {
      this.presentToast('Error al agregar categoria: ' + JSON.stringify(e));
    }
  }

  //Método para buscar le id de una categoria
  async buscarCat(categoria: string): Promise<any> {
    try {
      if (this.databaseObj) {
        const res = await this.databaseObj.executeSql(`SELECT id_categoria FROM ${this.table_categoria} WHERE id_categoria = ?`, [categoria]);

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
async addProduct(nombre_producto: string, descripcion_producto: string, precio: number, id_categoria: number, stock: number, imagen: Blob | null) {
  try {
    if (this.databaseObj) {
      await this.databaseObj.executeSql(
        `INSERT INTO ${this.table_producto} (nombre_producto, descripcion_producto, precio, id_categoria, stock, imagen) VALUES (?, ?, ?, ?, ?, ?)`,
        [nombre_producto, descripcion_producto, precio, id_categoria, stock, imagen]
      );
      this.loadProducts();
      this.presentToast('Producto agregado con éxito');
    } else {
      this.presentToast("Database object no fue inicializada.");
    }
  } catch (e) {
    this.presentToast('Error al agregar producto: ' + JSON.stringify(e));
  }
}



async modificarProducto(id_producto: number, nombre_producto: string, descripcion_producto: string, precio: number, id_categoria: number, stock: number, imagen: Blob | null) {
  try {
      if (this.databaseObj) {
          await this.databaseObj.executeSql(
              `UPDATE ${this.table_producto} SET nombre_producto = ?, descripcion_producto = ?, precio = ?, id_categoria = ?, stock = ?, imagen = ? WHERE id_producto = ?`,
              [nombre_producto, descripcion_producto, precio, id_categoria, stock, imagen, id_producto]
          );
          this.presentAlert("Modificar", "Producto modificado con éxito");
          this.loadProducts(); // Cargar productos actualizados, si tienes este método
      } else {
          this.presentAlert("Modificar", "Error: La base de datos no fue inicializada");
      }
  } catch (e) {
      this.presentAlert("Modificar", "Error: " + JSON.stringify(e));
  }
}

async eliminarProducto(id_producto: number) {
  try {
      if (this.databaseObj) {
          await this.databaseObj.executeSql(
              `DELETE FROM ${this.table_producto} WHERE id_producto = ?`,
              [id_producto]
          );
          this.presentAlert("Eliminar", "Producto eliminado con éxito");
          this.loadProducts(); // Refresca la lista de productos si tienes este método
      } else {
          this.presentAlert("Eliminar", "Error: La base de datos no fue inicializada");
      }
  } catch (e) {
      this.presentAlert("Eliminar", "Error: " + JSON.stringify(e));
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
async addToCart(email: string, productId: number, quantity: number) {
  try {
    if (this.databaseObj) {
      // Verifica si el usuario existe en la base de datos
      const userResult = await this.databaseObj.executeSql(
        `SELECT id_usuario FROM ${this.table_usuario} WHERE correo = ?`, 
        [email]
      );

      if (userResult.rows.length === 0) {
        console.error('Usuario no encontrado');
        return;
      }

      const userId = userResult.rows.item(0).id_usuario;
      const product = await this.getProductById(productId); // Obtiene el producto por su ID

      if (product) {
        // Verifica si el producto ya está en el carrito del usuario
        const existingItems = await this.getCartItemsByEmail(email, productId);
        const existingItem = existingItems.length > 0 ? existingItems[0] : null;

        let newQuantity = quantity; // Define la cantidad que el usuario quiere agregar

        if (existingItem) {
          // Si el producto ya existe en el carrito, suma la cantidad
          newQuantity += existingItem.cantidad;

          // Limita la cantidad al stock disponible
          if (newQuantity > product.stock) {
            newQuantity = product.stock;  // No permitir más de lo que hay en stock
          }

          const newTotal = product.precio * newQuantity;
          // Actualiza el artículo existente en el carrito
          await this.updateCartItem(email, productId, newQuantity, newTotal);

        } else {
          // Si el producto no existe en el carrito, se agrega como un nuevo item
          if (quantity > product.stock) {
            newQuantity = product.stock;  // Limitar la cantidad al stock máximo
          }

          const total = product.precio * newQuantity;
          // Inserta el nuevo producto en el carrito
          await this.databaseObj.executeSql(
            `INSERT INTO ${this.table_carrito} (id_usuario, id_producto, cantidad, total) VALUES (?, ?, ?, ?)`,
            [userId, productId, newQuantity, total]
          );
        }

        // Mostrar mensaje de éxito o actualización, por ejemplo con un toast
        console.log(`Producto ${productId} agregado al carrito con ${newQuantity} unidades`);

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



// Método para actualizar un item en el carrito usando el correo en lugar del ID del usuario
async updateCartItem(email: string, productId: number, quantity: number, total: number) {
  try {
    if (this.databaseObj) {
      // Obtener el ID del usuario autenticado usando su correo
      const userResult = await this.databaseObj.executeSql(
        `SELECT id_usuario FROM ${this.table_usuario} WHERE correo = ?`, 
        [email]
      );

      if (userResult.rows.length === 0) {
        console.error('Usuario no encontrado');
        return;
      }

      const userId = userResult.rows.item(0).id_usuario;

      // Actualizar la cantidad y el total del producto en el carrito
      await this.databaseObj.executeSql(
        `UPDATE ${this.table_carrito} SET cantidad = ?, total = ? WHERE id_usuario = ? AND id_producto = ?`,
        [quantity, total, userId, productId]
      );
      console.log('Item actualizado en el carrito');
    } else {
      console.error("Database object no fue inicializada.");
    }
  } catch (e) {
    console.error('Error actualizando el item del carrito', e);
  }
}


// Método para obtener los ítems del carrito del usuario autenticado usando su correo
async getCartItemsByEmail(email: string, productId?: number): Promise<any[]> {
  try {
    if (this.databaseObj) {
      // Obtener el ID del usuario autenticado
      const userResult = await this.databaseObj.executeSql(
        `SELECT id_usuario FROM ${this.table_usuario} WHERE correo = ?`, 
        [email]
      );

      if (userResult.rows.length === 0) {
        console.error('Usuario no encontrado');
        return [];
      }

      const userId = userResult.rows.item(0).id_usuario;

      // Construir la consulta SQL para obtener los ítems del carrito
      let query = `
        SELECT c.*, p.nombre_producto, p.precio, p.imagen 
        FROM ${this.table_carrito} c 
        JOIN ${this.table_producto} p ON c.id_producto = p.id_producto 
        WHERE c.id_usuario = ?
      `;
      const params = [userId];

      // Si se proporciona productId, modificar la consulta para buscar un solo producto
      if (productId) {
        query += ' AND c.id_producto = ?';
        params.push(productId);
      }

      // Ejecutar la consulta SQL
      const res = await this.databaseObj.executeSql(query, params);

      // Recoger todos los resultados en un array
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
    console.error('Error obteniendo items del carrito', e);
    return [];
  }
}



// Método para eliminar productos del carrito usando el correo en lugar del ID del usuario
async removeFromCart(email: string, productId: number) {
  try {
    if (this.databaseObj) {
      // Obtener el ID del usuario autenticado usando su correo
      const userResult = await this.databaseObj.executeSql(
        `SELECT id_usuario FROM ${this.table_usuario} WHERE correo = ?`, 
        [email]
      );

      if (userResult.rows.length === 0) {
        console.error('Usuario no encontrado');
        return;
      }

      const userId = userResult.rows.item(0).id_usuario;

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



// Método para obtener el ID del usuario autenticado
async getCurrentUser(email: string): Promise<any> {
  try {
    if (this.databaseObj) {
      const result = await this.databaseObj.executeSql(
        `SELECT * FROM ${this.table_usuario} WHERE correo = ?`, [email]
      );

      if (result.rows.length > 0) {
        const user = result.rows.item(0);
        return user; // Devuelve el usuario encontrado con `id_usuario`
      } else {
        console.error('Usuario no encontrado');
        return null;
      }
    }
  } catch (e) {
    console.error('Error obteniendo usuario', e);
    return null;
  }
}


getCurrentUserObservable(): Observable<any> {
  return this.currentUserSubject.asObservable();
}

async updatePassword(username: string, newPassword: string): Promise<void> {
  if (!this.databaseObj) {
    throw new Error('Database not initialized');
  }

  // contraseña
  const query = `UPDATE usuario SET contraseña = ? WHERE correo = ?`;
  const result = await this.databaseObj.executeSql(query, [newPassword, username]);
  
  if (result.rowsAffected === 0) {
    throw new Error('No se pudo actualizar la contraseña. Verifica si el usuario existe.');
  }
}
async updateUsername(email: string, newUsername: string): Promise<void> {
  if (!this.databaseObj) {
    throw new Error('Database not initialized');
  }

  const query = `UPDATE usuario SET nombre_usuario = ? WHERE correo = ?`; // Cambia el nombre de la columna si es necesario
  const result = await this.databaseObj.executeSql(query, [newUsername, email]);
  
  if (result.rowsAffected === 0) {
    throw new Error('No se pudo actualizar el perfil. Verifica si el usuario existe.');
  }
}
async updateEmail(currentEmail: string, newEmail: string): Promise<void> {
  if (!this.databaseObj) {
    throw new Error('Database not initialized');
  }

  const query = `UPDATE usuario SET correo = ? WHERE correo = ?`; // Asegúrate de que las columnas sean correctas
  const result = await this.databaseObj.executeSql(query, [newEmail, currentEmail]);

  if (result.rowsAffected === 0) {
    throw new Error('No se pudo actualizar el correo. Verifica si el usuario existe.');
  }
}
async modificarCategoria(id_categoria: number, nombre_categoria: string, imagen: string | null) {
  try {
    if (this.databaseObj) {
      await this.databaseObj.executeSql(
        `UPDATE categoria SET nombre_categoria = ?, imagen = ? WHERE id_categoria = ?`,
        [nombre_categoria, imagen, id_categoria]
      );
      this.presentToast('Categoría modificada exitosamente.');
    } else {
      throw new Error('La base de datos no está inicializada.');
    }
  } catch (error) {
    throw new Error('Error al modificar la categoría: ' + JSON.stringify(error));
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
async loadPurchaseHistory(email: string) {
  try {
    const compras = await this.getPurchaseHistoryByUser(email);
    this.historialComprasSubject.next(compras);
  } catch (error) {
    console.error('Error al cargar el historial de compras:', error);
    this.historialComprasSubject.next([]);
  }
}

async loadSaleDetails(idVenta: number) {
  try {
    const detalles = await this.getSaleDetails(idVenta);
    this.detallesVentaSubject.next(detalles);
  } catch (error) {
    console.error('Error al cargar detalles de la venta:', error);
    this.detallesVentaSubject.next([]);
  }
}
  // Método para crear una venta
  async createSale(userId: number, total: number): Promise<number | null> {
    try {
      if (!this.databaseObj) {
        console.error("Database object no fue inicializada.");
        return null;
      }

      const fechaVenta = new Date().toISOString(); // Fecha actual en formato ISO
      const result = await this.databaseObj.executeSql(
        `INSERT INTO venta (fecha_venta, total, id_usuario) VALUES (?, ?, ?)`,
        [fechaVenta, total, userId]
      );

      if (result.rowsAffected > 0) {
        console.log("Venta creada con éxito.");
        return result.insertId; // Retorna el ID de la venta creada
      }
      return null;
    } catch (error) {
      console.error("Error creando la venta:", error);
      return null;
    }
  }

  // Método para crear un detalle de venta
  async createSaleDetail(idVenta: number, idProducto: number, cantidad: number, subtotal: number) {
    try {
      if (!this.databaseObj) {
        console.error("Database object no fue inicializada.");
        return;
      }

      await this.databaseObj.executeSql(
        `INSERT INTO detalle_venta (id_venta, id_producto, cantidad, subtotal) VALUES (?, ?, ?, ?)`,
        [idVenta, idProducto, cantidad, subtotal]
      );
      console.log("Detalle de venta creado con éxito.");
    } catch (error) {
      console.error("Error creando el detalle de venta:", error);
    }
  }
  async getPurchaseHistoryByUser(email: string): Promise<any[]> {
    try {
      if (!this.databaseObj) {
        throw new Error('Database object is not initialized.');
      }
  
      // Consulta para obtener el historial de compras por correo
      const query = `
        SELECT v.id_venta, v.fecha_venta, v.total 
        FROM venta v
        INNER JOIN usuario u ON v.id_usuario = u.id_usuario
        WHERE u.correo = ?
        ORDER BY v.fecha_venta DESC
      `;
      const result = await this.databaseObj.executeSql(query, [email]);
  
      const purchases: any[] = [];
      for (let i = 0; i < result.rows.length; i++) {
        purchases.push(result.rows.item(i));
      }
  
      return purchases;
    } catch (error) {
      console.error('Error fetching purchase history:', error);
      return [];
    }
  }
  
async finalizePurchase(email: string) {
  try {
    if (!this.databaseObj) {
      console.error('Database object no fue inicializada.');
      return;
    }

    // Obtener el ID del usuario
    const userResult = await this.databaseObj.executeSql(
      `SELECT id_usuario FROM usuario WHERE correo = ?`, [email]
    );

    if (userResult.rows.length === 0) {
      console.error('Usuario no encontrado');
      return;
    }

    const userId = userResult.rows.item(0).id_usuario;

    // Obtener productos del carrito del usuario
    const cartItems = await this.getCartItemsByEmail(email);
    let total = 0;

    for (const item of cartItems) {
      total += item.precio * item.cantidad; // Calcular el total de la venta
    }

    // Crear la venta y obtener el ID de la venta creada
    const saleId = await this.createSale(userId, total);

    if (saleId) {
      for (const item of cartItems) {
        // Crear detalles de la venta
        await this.createSaleDetail(saleId, item.id_producto, item.cantidad, item.precio * item.cantidad);

        // Reducir el stock del producto
        await this.databaseObj.executeSql(
          `UPDATE producto SET stock = stock - ? WHERE id_producto = ?`,
          [item.cantidad, item.id_producto]
        );
      }

      // Limpiar el carrito del usuario
      await this.databaseObj.executeSql(`DELETE FROM carrito WHERE id_usuario = ?`, [userId]);

      // Emitir el historial actualizado
      const updatedHistory = await this.getPurchaseHistoryByUser(email);
      this.historialComprasSubject.next(updatedHistory);
    }
  } catch (error) {
    console.error('Error finalizando la compra:', error);
  }
}



  async getSaleDetails(idVenta: number): Promise<any[]> {
    try {
      // Verifica que el objeto de la base de datos esté inicializado
      if (!this.databaseObj) {
        throw new Error('Database object is not initialized.');
      }
  
      // Consulta para obtener los detalles de la venta
      const query = `SELECT * FROM detalle_venta WHERE id_venta = ?`;
      const result = await this.databaseObj.executeSql(query, [idVenta]);
  
      // Verifica si hay resultados y los convierte a un array
      const saleDetails: any[] = [];
      for (let i = 0; i < result.rows.length; i++) {
        saleDetails.push(result.rows.item(i)); // Convierte cada fila a un objeto
      }
  
      return saleDetails;
    } catch (error: unknown) { // Aquí definimos que error es de tipo 'unknown'
      // Comprobamos si 'error' es una instancia de 'Error'
      if (error instanceof Error) {
        console.error('Error fetching sale details:', error.message);
        throw new Error(`Failed to fetch sale details: ${error.message}`);
      } else {
        // Si no es un objeto de tipo 'Error', mostramos un mensaje genérico
        console.error('Unknown error:', error);
        throw new Error('Failed to fetch sale details: Unknown error');
      }
    }
  }
  async loadDetailedPurchaseHistory(email: string) {
    try {
        if (!this.databaseObj) {
            throw new Error('Database object is not initialized.');
        }

        const userResult = await this.databaseObj.executeSql(
            `SELECT id_usuario FROM usuario WHERE correo = ?`,
            [email]
        );

        if (userResult.rows.length === 0) {
            console.error('Usuario no encontrado con el correo:', email);
            this.historialComprasSubject.next([]);
            return;
        }

        const userId = userResult.rows.item(0).id_usuario;

        const ventasResult = await this.databaseObj.executeSql(
            `SELECT id_venta, fecha_venta, total 
             FROM venta 
             WHERE id_usuario = ? 
             ORDER BY fecha_venta DESC`,
            [userId]
        );

        const ventas = [];
        for (let i = 0; i < ventasResult.rows.length; i++) {
            const venta = ventasResult.rows.item(i);

            const detallesResult = await this.databaseObj.executeSql(
                `SELECT 
                    p.nombre_producto AS nombre_producto, 
                    dv.cantidad AS cantidad, 
                    dv.subtotal AS subtotal, 
                    p.imagen AS imagen_producto
                 FROM detalle_venta dv
                 INNER JOIN producto p ON dv.id_producto = p.id_producto
                 WHERE dv.id_venta = ?`,
                [venta.id_venta]
            );

            const detalles = [];
            for (let j = 0; j < detallesResult.rows.length; j++) {
                detalles.push(detallesResult.rows.item(j));
            }

            const fechaChile = new Date(venta.fecha_venta).toLocaleString('es-CL', {
                timeZone: 'America/Santiago',
            });

            ventas.push({
                id_venta: venta.id_venta,
                fecha_venta: fechaChile,
                total: Math.round(venta.total),
                detalles,
            });
        }

        this.historialComprasSubject.next(ventas);
    } catch (error) {
        console.error('Error al cargar el historial de compras detallado:', error);
        this.historialComprasSubject.next([]);
    }
}


  async loadDetailedSalesHistory() {
    try {
      if (!this.databaseObj) {
        console.error('El objeto de la base de datos no está inicializado.');
        this.ventasSubject.next([]);
        return;
      }
  
      const userEmail = localStorage.getItem('userEmail');
      if (!userEmail) {
        console.error('El correo del usuario no está definido en localStorage.');
        this.ventasSubject.next([]);
        return;
      }
  
      console.log('Correo del usuario:', userEmail);
  
      const ventasResult = await this.databaseObj.executeSql(
        `SELECT v.id_venta, v.fecha_venta, v.total, u.correo AS correo_usuario
         FROM venta v 
         INNER JOIN usuario u ON v.id_usuario = u.id_usuario
         WHERE u.correo = ?
         ORDER BY v.fecha_venta DESC`, 
        [userEmail]
      );
  
      const ventas = [];
      for (let i = 0; i < ventasResult.rows.length; i++) {
        const venta = ventasResult.rows.item(i);
  
        const detallesResult = await this.databaseObj.executeSql(
          `SELECT 
            p.nombre_producto AS nombre_producto, 
            dv.cantidad AS cantidad, 
            dv.subtotal AS subtotal, 
            p.imagen AS imagen_producto
           FROM detalle_venta dv
           INNER JOIN producto p ON dv.id_producto = p.id_producto
           WHERE dv.id_venta = ?`,
          [venta.id_venta]
        );
  
        const detalles = [];
        for (let j = 0; j < detallesResult.rows.length; j++) {
          detalles.push(detallesResult.rows.item(j));
        }
  
        const fechaChile = new Date(venta.fecha_venta).toLocaleString('es-CL', {
          timeZone: 'America/Santiago',
        });
  
        ventas.push({
          id_venta: venta.id_venta,
          fecha_venta: fechaChile,
          total: Math.round(venta.total),
          correo_usuario: venta.correo_usuario,
          detalles,
        });
      }
  
      console.log('Ventas procesadas:', ventas);
      this.ventasSubject.next(ventas);
    } catch (error) {
      console.error('Error al obtener el historial detallado de ventas:', JSON.stringify(error, Object.getOwnPropertyNames(error)));
      this.ventasSubject.next([]);
    }
  }
  async loadAllSalesHistory() {
    try {
      if (!this.databaseObj) {
        throw new Error('Database object is not initialized.');
      }
  
      // Obtener todas las ventas con el correo del usuario asociado
      const ventasResult = await this.databaseObj.executeSql(
        `SELECT v.id_venta, v.fecha_venta, v.total, u.correo AS correo_usuario
         FROM venta v
         INNER JOIN usuario u ON v.id_usuario = u.id_usuario
         ORDER BY v.fecha_venta DESC`
      );
  
      const ventas: any[] = [];
      for (let i = 0; i < ventasResult.rows.length; i++) {
        const venta = ventasResult.rows.item(i);
  
        // Obtener detalles de la venta
        const detallesResult = await this.databaseObj.executeSql(
          `SELECT 
            p.nombre_producto AS nombre_producto,
            dv.cantidad AS cantidad,
            dv.subtotal AS subtotal,
            p.imagen AS imagen_producto
           FROM detalle_venta dv
           INNER JOIN producto p ON dv.id_producto = p.id_producto
           WHERE dv.id_venta = ?`,
          [venta.id_venta]
        );
  
        const detalles: any[] = [];
        for (let j = 0; j < detallesResult.rows.length; j++) {
          detalles.push(detallesResult.rows.item(j));
        }
  
        const fechaChile = new Date(venta.fecha_venta).toLocaleString('es-CL', {
          timeZone: 'America/Santiago',
        });
  
        ventas.push({
          id_venta: venta.id_venta,
          fecha_venta: fechaChile,
          total: Math.round(venta.total),
          correo_usuario: venta.correo_usuario,
          detalles,
        });
      }
  
      this.historialComprasSubject.next(ventas);
    } catch (error) {
      console.error('Error al cargar el historial de todas las ventas:', error);
      this.historialComprasSubject.next([]);
    }
  }
}  

