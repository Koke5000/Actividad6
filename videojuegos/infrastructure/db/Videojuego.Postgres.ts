import executeQuery from "../../../context/db/PostgresConnection";
import Videojuego from "../../domain/Videojuego";
import VideojuegoRepository from "../../domain/Videojuego.Repository";

export default class VideojuegoRepositoryPostgres implements VideojuegoRepository{
    async getVideojuegos(): Promise<Videojuego[]> {
        const videojuegos : Videojuego[] = [];
        const videojuegosDB : any = await executeQuery("SELECT * FROM videojuegos");
        for (const videojuegoDB of videojuegosDB) {
            let videojuego : Videojuego = {
                id: videojuegoDB.id,
                nombre: videojuegoDB.nombre
            }
            videojuegos.push(videojuego);
        }
        return videojuegos;
    }
    async getVideojuegoById(id: string): Promise<Videojuego> {
        const videojuegoDB : any = await executeQuery(`SELECT * FROM videojuegos WHERE id = ${id}`);
        let videojuego : Videojuego = {
            id: videojuegoDB[0].id,
            nombre: videojuegoDB[0].nombre
        }

        return videojuego;
    }

}