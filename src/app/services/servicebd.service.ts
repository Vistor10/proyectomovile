import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class ServicebdService {
  public database!: SQLiteObject;

  // Definición de tablas
  tablaRol: string = `CREATE TABLE IF NOT EXISTS rol (
    idrol INTEGER PRIMARY KEY AUTOINCREMENT, 
    nombrerol VARCHAR(100) NOT NULL
  );`;

  tablaEstado: string = `CREATE TABLE IF NOT EXISTS estado (
    idestado INTEGER PRIMARY KEY AUTOINCREMENT, 
    nombre VARCHAR(50) NOT NULL
  );`;

  tablaCategoria: string = `CREATE TABLE IF NOT EXISTS categoria (
    idcategoria INTEGER PRIMARY KEY AUTOINCREMENT, 
    nombrecat VARCHAR(100) NOT NULL
  );`;

  tablaUsuario: string = `CREATE TABLE IF NOT EXISTS usuario (
    iduser INTEGER PRIMARY KEY AUTOINCREMENT, 
    rut VARCHAR(20) NOT NULL, 
    nombres VARCHAR(30) NOT NULL, 
    correo VARCHAR(30) NOT NULL
  );`;

  tablaVenta: string = `CREATE TABLE IF NOT EXISTS venta (
    idventa INTEGER PRIMARY KEY AUTOINCREMENT, 
    fecventa DATE NOT NULL, 
    total INTEGER NOT NULL
  );`;

  tablaProducto: string = `CREATE TABLE IF NOT EXISTS producto (
    idproducto INTEGER PRIMARY KEY AUTOINCREMENT, 
    nombreproducto VARCHAR(100) NOT NULL, 
    categoria VARCHAR(50) NOT NULL, 
    descripcion TEXT NOT NULL, 
    precio INTEGER
  );`;

  tablaDetalle: string = `CREATE TABLE IF NOT EXISTS detalle (
    iddetalle INTEGER PRIMARY KEY AUTOINCREMENT, 
    cantidad INTEGER NOT NULL, 
    subtotal INTEGER NOT NULL
  );`;

  tablaResena: string = `CREATE TABLE IF NOT EXISTS resena (
    idresena INTEGER PRIMARY KEY AUTOINCREMENT, 
    descripcion TEXT NOT NULL, 
    puntos INTEGER NOT NULL, 
    fecresena DATE NOT NULL
  );`;

  // Tabla para gestionar el carrito de compras
  tablaCarrito: string = `CREATE TABLE IF NOT EXISTS carrito (
    idproducto INTEGER PRIMARY KEY AUTOINCREMENT, 
    nombreproducto VARCHAR(100) NOT NULL, 
    precio INTEGER NOT NULL, 
    imagen TEXT NOT NULL
  );`;

  // Variables de insert en las tablas de registro iniciales
  registroRol: string = `INSERT OR IGNORE INTO rol (idrol, nombrerol) VALUES (1, 'Administrador');`;
  registroRol1: string = `INSERT OR IGNORE INTO rol (idrol, nombrerol) VALUES (2, 'Cliente');`;
  registroCategoria: string = `INSERT OR IGNORE INTO categoria (idcategoria, nombrecat) VALUES (1, 'Gabinetes');`;
  registroCategoria1: string = `INSERT OR IGNORE INTO categoria (idcategoria, nombrecat) VALUES (2, 'Teclados');`;
  registroCategoria2: string = `INSERT OR IGNORE INTO categoria (idcategoria, nombrecat) VALUES (3, 'Audífonos gamer');`;
  registroCategoria3: string = `INSERT OR IGNORE INTO categoria (idcategoria, nombrecat) VALUES (4, 'Placas madre');`;
  registroCategoria4: string = `INSERT OR IGNORE INTO categoria (idcategoria, nombrecat) VALUES (5, 'Fuentes de poder');`;
  registroCategoria5: string = `INSERT OR IGNORE INTO categoria (idcategoria, nombrecat) VALUES (6, 'Memorias RAM');`;
  registroCategoria6: string = `INSERT OR IGNORE INTO categoria (idcategoria, nombrecat) VALUES (7, 'Procesadores');`;
  registroCategoria7: string = `INSERT OR IGNORE INTO categoria (idcategoria, nombrecat) VALUES (8, 'Tarjetas de video');`;
  registroCategoria8: string = `INSERT OR IGNORE INTO categoria (idcategoria, nombrecat) VALUES (9, 'Monitores');`;
  registroUsuario: string = `INSERT OR IGNORE INTO usuario (iduser, rut, nombres, correo) VALUES (1, '123456789', 'Josefa', 'jose@gmail.cl');`;

  constructor(private sqlite: SQLite) { 
    this.initializeDatabase();
  }

  // Inicializar la base de datos y crear tablas
  async initializeDatabase() {
    try {
      this.database = await this.sqlite.create({
        name: 'gadgetzone.db', // Nombre de la base de datos
        location: 'default' // Ubicación de la base de datos
      });

      // Crear tablas
      await this.database.executeSql(this.tablaRol, []);
      await this.database.executeSql(this.tablaEstado, []);
      await this.database.executeSql(this.tablaCategoria, []);
      await this.database.executeSql(this.tablaUsuario, []);
      await this.database.executeSql(this.tablaVenta, []);
      await this.database.executeSql(this.tablaProducto, []);
      await this.database.executeSql(this.tablaDetalle, []);
      await this.database.executeSql(this.tablaResena, []);
      await this.database.executeSql(this.tablaCarrito, []); // Crear tabla del carrito

      // Ejecutar inserts iniciales
      await this.database.executeSql(this.registroRol, []);
      await this.database.executeSql(this.registroRol1, []);
      await this.database.executeSql(this.registroCategoria, []);
      await this.database.executeSql(this.registroCategoria1, []);
      await this.database.executeSql(this.registroCategoria2, []);
      await this.database.executeSql(this.registroCategoria3, []);
      await this.database.executeSql(this.registroCategoria4, []);
      await this.database.executeSql(this.registroCategoria5, []);
      await this.database.executeSql(this.registroCategoria6, []);
      await this.database.executeSql(this.registroCategoria7, []);
      await this.database.executeSql(this.registroCategoria8, []);
      await this.database.executeSql(this.registroUsuario, []);

      console.log('Tablas y registros iniciales creados con éxito');
      
    } catch (error) {
      console.error('Error al inicializar la base de datos', error);
    }
  }

  // Método para insertar productos en el carrito
  async addToCart(producto: any) {
    const query = `INSERT INTO carrito (nombreproducto, precio, imagen) VALUES (?, ?, ?)`;
    const values = [producto.nombreproducto, producto.precio, producto.imagen];
    try {
      await this.database.executeSql(query, values);
      console.log('Producto añadido al carrito');
    } catch (error) {
      console.error('Error al añadir producto al carrito', error);
    }
  }

  // Método para obtener productos del carrito
  async getCartItems() {
    const query = `SELECT * FROM carrito`;
    try {
      const result = await this.database.executeSql(query, []);
      let cartItems = [];
      for (let i = 0; i < result.rows.length; i++) {
        cartItems.push(result.rows.item(i));
      }
      return cartItems;
    } catch (error) {
      console.error('Error al obtener productos del carrito', error);
      return [];
    }
  }

  // Método para eliminar un producto del carrito
  async removeFromCart(idproducto: number) {
    const query = `DELETE FROM carrito WHERE idproducto = ?`;
    try {
      await this.database.executeSql(query, [idproducto]);
      console.log('Producto eliminado del carrito');
    } catch (error) {
      console.error('Error al eliminar producto del carrito', error);
    }
  }

  // Método para vaciar el carrito
  async clearCart() {
    const query = `DELETE FROM carrito`;
    try {
      await this.database.executeSql(query, []);
      console.log('Carrito vacío');
    } catch (error) {
      console.error('Error al vaciar el carrito', error);
    }
  }
}
