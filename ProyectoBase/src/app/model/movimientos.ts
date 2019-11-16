import { Usuario } from './usuario';


export class Movimientos {
    public static endPoint = '/movimientos';
    public cantidad: number;
    public cuenta: {
        nombre: String,
        id: number
      }
    publicetiqueta: {
        id: number,
        descripcion: String
    } 
    public fecha: String;
    public tipo: number;
    public descripcion: string;
    public usuario: Usuario;
}