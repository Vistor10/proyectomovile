import { Injectable } from '@angular/core';
import { SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
@Injectable({
  providedIn: 'root'
})
export class ServicebdService {
  public database!: SQLiteObject;

  tablaProducto: string = "CREATE TABLE IF NOT EXISTS producto(idproducto INTEGER PRIMARY KEY autoincrement, nombreproducto VARCHAR (100) NOT NULL, categoría VARCHAR (50) NOT NULL, descripción TEXT NOT NULL, precio INTEGER);";

  tablaUsuario: string = "CREATE TABLE IF NOT EXISTS usuario(iduser INTEGER PRIMARY KEY autoincrement, rut VARCHAR (20) NOT NULL, nombres VARCHAR (30) NOT NULL, correo VARCHAR (30) NOT NULL);";

  tablaCategoria: string = "CREATE TABLE IF NOT EXISTS categoria(idcategoria INTEGER PRIMARY KEY autoincrement, nombrecat VARCHAR (100) NOT NULL);";

  tablaVenta: string = "CREATE TABLE IF NOT EXISTS venta (idventa INTEGER PRIMARY KEY autoincrement, fecventa date NOT NULL, total INTEGER NOT NULL );";

  tablaRol: string = "CREATE TABLE IF NOT EXISTS rol(idrol INTEGER PRIMARY KEY autoincrement, nombrerol VARCHAR (100) NOT NULL);";

  tablaReseña: string = "CREATE TABLE IF NOT EXISTS reseña(idreseña INTEGER PRIMARY KEY autoincrement, descripcion TEXT NOT NULL, puntos INTEGER NOT NULL, fecreseña date NOT NULL);";

  constructor() { }
}
