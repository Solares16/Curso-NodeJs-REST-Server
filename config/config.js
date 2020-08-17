/**
 * 
 * ARCHIVO DE CONFIGURACION GLOBAL
 * 
 */


process.env.PORT = process.env.PORT || 3000;

/** 
 * 
 * 
 * ENTORNO
 */

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/**
 * BASE DE DATOS
 */

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://solaresdb:5peNgVzC68cSJ55E@cluster0.vyzjj.mongodb.net/cafe';
}

process.env.URLDB = urlDB;
//local:  'mongodb: //localhost:27017/cafe'
//remota: 'mongodb + srv: //solaresdb:5peNgVzC68cSJ55E@cluster0.vyzjj.mongodb.net/cafe'