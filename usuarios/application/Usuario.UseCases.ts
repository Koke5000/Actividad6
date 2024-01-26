import { compare, hash } from "../../context/security/encrypter";
import Usuario from "../domain/Usuario";
import UsuarioRepository from "../domain/Usuario.Repository";

export default class UsuarioUseCases{
    private usuarioRepository : UsuarioRepository;

    constructor(usuarioRepository : UsuarioRepository){
        this.usuarioRepository = usuarioRepository;
    }

/*     async register(usuario: Usuario): Promise<Usuario> {
        const password = usuario.password ? hash(usuario.password) : undefined;
        return await this.usuarioRepository.register({
          ...usuario,
          password,
        });
      } */
    
      async login(usuario: Usuario): Promise<Usuario> {
        const stored = await this.usuarioRepository.login(usuario);
        if (
          !stored ||
          usuario.password === "" ||
          stored.password === "" ||
          !compare(usuario.password || "", stored.password || "")
        )
          throw new Error("User not found or password incorrect");
        else return stored;
      }

}