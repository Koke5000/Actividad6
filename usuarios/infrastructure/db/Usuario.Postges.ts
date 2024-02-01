import Usuario from "../../domain/Usuario";
import UsuarioRepository from "../../domain/Usuario.Repository";
import executeQuery from "../../../context/db/PostgresConnection"

export default class UsuarioRepositoryPostgres implements UsuarioRepository{

    async getUsuarioByNombre(nombre : string){
        const usuarioDB : any[] = await executeQuery(`SELECT * FROM usuarios WHERE nombre = '${nombre}'`);
        let usuario : Usuario = {
            nombre: usuarioDB[0].nombre,
            password: usuarioDB[0].password
        }
        return usuario;
    }

    async registro(usuario: Usuario): Promise<Usuario> {
        await executeQuery(`insert into usuarios (nombre, password) values ('${usuario.nombre}', '${usuario.password}')`);
        return this.getUsuarioByNombre(usuario.nombre);
    }

    async login(usuario: Usuario): Promise<Usuario> {
        const usuarioDB : any[] = await executeQuery(`SELECT * FROM usuarios WHERE nombre = '${usuario.nombre}'`);
        if (usuarioDB.length === 0) {
            throw new Error("Usuario/contraseña no es correcto");
        } else {
            const usuario: Usuario = {
                nombre: usuarioDB[0].nombre,
                password: usuarioDB[0].password,
            };
        return usuario;
        }
    }  
    
}

