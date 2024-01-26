import Usuario from "./Usuario";

export default interface UsuarioRepository {
    register(user: Usuario): Promise<Usuario>;
    login(user: Usuario): Promise<Usuario>;
}