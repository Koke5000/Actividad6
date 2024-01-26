import express from "express";
import VideojuegoUseCases from "../../application/Videojuego.UseCases";
import VideojuegoRepositoryPostgres from "../db/Videojuego.Postgres";

const router = express.Router();
const videojuegoUseCases : VideojuegoUseCases = new VideojuegoUseCases(new VideojuegoRepositoryPostgres());

router.get("/", async (req, res) =>{
    try {
        res.json(await videojuegoUseCases.getVideojuegos());
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})
    }
})

router.get("/:id", async (req, res) =>{
    try {
        res.json(await videojuegoUseCases.getVideojuegoById(req.params.id));
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})
    }
})

export default router;