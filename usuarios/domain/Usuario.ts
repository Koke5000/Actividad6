import Videojuego from "../../videojuegos/domain/Videojuego";

export default interface Usuario{
    id?: number,
    nombre: string,
    password: string,
    compras?: Videojuego[];
    carrito?: Videojuego[];
}