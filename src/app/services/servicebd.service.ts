import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class ServicebdService {
  public database!: SQLiteObject;

  // Definición de tablas
  tablaRol: string = "CREATE TABLE IF NOT EXISTS rol(idrol INTEGER PRIMARY KEY autoincrement, nombrerol VARCHAR (100) NOT NULL);";
  tablaEstado: string = "CREATE TABLE IF NOT EXISTS estado(idestado INTEGER PRIMARY KEY autoincrement, nombre VARCHAR(50) NOT NULL);";
  tablaCategoria: string = "CREATE TABLE IF NOT EXISTS categoria(idcategoria INTEGER PRIMARY KEY autoincrement, nombrecat VARCHAR (100) NOT NULL);";
  tablaUsuario: string = "CREATE TABLE IF NOT EXISTS usuario(iduser INTEGER PRIMARY KEY autoincrement, rut VARCHAR (20) NOT NULL, nombres VARCHAR (30) NOT NULL, correo VARCHAR (30) NOT NULL);";
  tablaVenta: string = "CREATE TABLE IF NOT EXISTS venta(idventa INTEGER PRIMARY KEY autoincrement, fecventa date NOT NULL, total INTEGER NOT NULL );";
  tablaProducto: string = "CREATE TABLE IF NOT EXISTS producto(idproducto INTEGER PRIMARY KEY autoincrement, nombreproducto VARCHAR (100) NOT NULL, categoría VARCHAR (50) NOT NULL, descripción TEXT NOT NULL, precio INTEGER);";
  tablaDetalle: string = "CREATE TABLE IF NOT EXISTS detalle(iddetalle INTEGER PRIMARY KEY autoincrement, cantidad INTEGER NOT NULL, subtotal INTEGER NOT NULL);";
  tablaResena: string = "CREATE TABLE IF NOT EXISTS resena(idresena INTEGER PRIMARY KEY autoincrement, descripcion TEXT NOT NULL, puntos INTEGER NOT NULL, fecresena date NOT NULL);";

  // Variables de insert en las tablas de registro iniciales
  registroRol: string = "INSERT OR IGNORE INTO rol (idrol, nombrerol) values (1, 'Administrador');";
  registroRol1: string = "INSERT OR IGNORE INTO rol (idrol, nombrerol) values (2, 'Cliente');";
  registroCategoria: string = "INSERT OR IGNORE INTO categoria (idcategoria, nombrecat) VALUES (1, 'Gabinetes');";
  registroCategoria1: string = "INSERT OR IGNORE INTO categoria (idcategoria, nombrecat) VALUES (2, 'Teclados');";
  registroCategoria2: string = "INSERT OR IGNORE INTO categoria (idcategoria, nombrecat) VALUES (3, 'Audifonos gamer');";
  registroCategoria3: string = "INSERT OR IGNORE INTO categoria (idcategoria, nombrecat) VALUES (4, 'placas madre');";
  registroCategoria4: string = "INSERT OR IGNORE INTO categoria (idcategoria, nombrecat) VALUES (5, 'fuentes de poder');";
  registroCategoria5: string = "INSERT OR IGNORE INTO categoria (idcategoria, nombrecat) VALUES (6, 'Memorias Ram');";
  registroCategoria6: string = "INSERT OR IGNORE INTO categoria (idcategoria, nombrecat) VALUES (7, 'Procesadores');";
  registroCategoria7: string = "INSERT OR IGNORE INTO categoria (idcategoria, nombrecat) VALUES (8, 'tarjetas de video');";
  registroCategoria8: string = "INSERT OR IGNORE INTO categoria (idcategoria, nombrecat) VALUES (9, 'Monitores');";
  registroUsuario: string = "INSERT OR IGNORE INTO usuario (iduser,rut,nombres,correo) VALUES (1,'123456789','josefa','jose@gmail.cl');";

  constructor(private sqlite: SQLite) { 
    this.initializeDatabase();
  }

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
}
