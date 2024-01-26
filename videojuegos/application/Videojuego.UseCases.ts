import VideojuegoRepository from "../domain/Videojuego.Repository";

export default class VideojuegoUseCases{
    private videojuegoRepository : VideojuegoRepository;

    constructor(videojuegoRepository : VideojuegoRepository){
        this.videojuegoRepository = videojuegoRepository;
    }

    async getVideojuegos(){
        return await this.videojuegoRepository.getVideojuegos();
    }

    async getVideojuegoById(id:string){
        return await this.videojuegoRepository.getVideojuegoById(id);
    }
}
