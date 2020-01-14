export class Proveedor {

   id: 					number;
   nickname:			string;
   name: 				string;
   typeRif: 			string;
   rif: 				   string;
   nit: 				   string;
   address: 			string;
   intents:				number = 0;
   lastloginDate: 	Date = null;
   status: 				string = "Activo";
   fk_area:				number = 2;
 
 }