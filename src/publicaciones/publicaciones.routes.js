import { Router } from "express";
import {
    crearPublicacion,
    listarPublicaciones
}from "./publicaciones.controller.js";

const router = Router();

router.post("/crearPublicacion", crearPublicacion);
router.get("/listarPublicaciones", listarPublicaciones);

export default router;