import express from "express";
import Usuario from "../../domain/Usuario";
import UsuarioRepositoryPostgres from "../db/Usuario.Postges";
import UsuarioUseCases from "../../application/Usuario.UseCases";
import { createToken } from "../../../context/security/auth";

const router = express.Router();
const usuarioUseCases:UsuarioUseCases = new UsuarioUseCases(new UsuarioRepositoryPostgres());

router.post("/registro", async (req, res) => {
    try {
        const usuario : Usuario = await usuarioUseCases.registro(req.body)
        res.json({nombre: usuario.nombre});
    } catch (error) {        
        res.status(500).json({error: "Internal Server Error"})
    }
});

router.post("/login", async (req, res) => {
    try {
        const usuarioLogin : Usuario = await usuarioUseCases.login(req.body);
        if (usuarioLogin == null){
            res.status(404).json({ mensaje: "Usuario no encontrado" });
        }
        const token = createToken(usuarioLogin);
        res.json({token});
    } catch (error) {
        console.log(error);

        res.status(500).json({error: "Internal Server Error"})
    }
});


export default router;