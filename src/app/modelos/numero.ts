import { Addendum } from '../modelos/addendum';

export class Numero {	
		
	   public id: 				number;
	   public shortCode: 		string;
	   public typeService:		string; 
	   public ESME:				string;
	   public create_date:		Date;
	   public close_date:		Date;
	   public productname: 		string;
	   public description: 		string;
	   public approxtraffic: 	number;
	   public observation: 		string;
	   public contrato: 		number;
	   public monetary: 		number;
	   public addendum:			Addendum;
  }
