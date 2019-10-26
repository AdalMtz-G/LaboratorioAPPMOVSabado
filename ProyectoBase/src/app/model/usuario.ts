import { HttpService } from '../service/http-services';

export class Usuario {
    public static endPoint = '/usuario';
    public nombre: string;
    public correo: string;
    public contrasena: string;
    public confirmacionContrasena: string;
}

/*
CREATE TABLE IF NOT EXISTS users (
        id integer PRIMARY KEY,
        name text,
        email text UNIQUE,
        password text) */