import Videojuego from "./Videojuego";

export default interface VideojuegoRepository{
    getVideojuegos(): Promise<Videojuego[]>;
    getVideojuegoById(id: string):Promise<Videojuego>;
}