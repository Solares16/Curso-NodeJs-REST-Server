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
 * 
 * 
 * VENCIMIENTO DEL TOKEN
 * 
 *  
 */

process.env.CADUCIDAD_TOKE = '48h';

/** 
 * 
 * 
 * SEED de autenticacion 
 * 
 * 
 */

process.env.SEED = process.env.SEED || 'el-secret-desarrollo';

/**
 * BASE DE DATOS
 */

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;
//local:  'mongodb: //localhost:27017/cafe'
//remota: 'mongodb + srv: //solaresdb:5peNgVzC68cSJ55E@cluster0.vyzjj.mongodb.net/cafe'


/**
 * google client
 */

process.env.CLIENT_ID = process.env.CLIENT_ID || '892540214397-0hf1bksj76etg97nshk93ajuo45caipv.apps.googleusercontent.com';