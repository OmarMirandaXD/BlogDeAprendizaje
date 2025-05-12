import { Router } from "express";
import {
    crearPublicacion,
    listarPublicaciones
} from "./publicaciones.controller.js";

const router = Router();

/**
 * @swagger
 * /crearPublicacion:
 *   post:
 *     summary: Crea una nueva publicación.
 *     tags: [Publicaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 description: Título de la publicación.
 *               contenido:
 *                 type: string
 *                 description: Contenido de la publicación.
 *               autor:
 *                 type: string
 *                 description: Autor de la publicación.
 *     responses:
 *       201:
 *         description: Publicación creada exitosamente.
 *       400:
 *         description: Error en los datos enviados.
 *       500:
 *         description: Error al crear la publicación.
 */
router.post("/crearPublicacion", crearPublicacion);

/**
 * @swagger
 * /listarPublicaciones:
 *   get:
 *     summary: Obtiene una lista de publicaciones.
 *     tags: [Publicaciones]
 *     responses:
 *       200:
 *         description: Lista de publicaciones obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID de la publicación.
 *                   titulo:
 *                     type: string
 *                     description: Título de la publicación.
 *                   contenido:
 *                     type: string
 *                     description: Contenido de la publicación.
 *                   autor:
 *                     type: string
 *                     description: Autor de la publicación.
 *       500:
 *         description: Error al obtener las publicaciones.
 */
router.get("/listarPublicaciones", listarPublicaciones);

export default router;