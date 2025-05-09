import { Router } from "express";
import {
    crearComentario,
    listarComentarios
} from "./comentarios.controller.js";

const router = Router();

/**
 * @swagger
 * /listarComentarios:
 *   get:
 *     summary: Obtiene una lista de comentarios.
 *     tags: [Comentarios]
 *     responses:
 *       200:
 *         description: Lista de comentarios obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID del comentario.
 *                   texto:
 *                     type: string
 *                     description: Contenido del comentario.
 *                   autor:
 *                     type: string
 *                     description: Autor del comentario.
 *       500:
 *         description: Error al obtener los comentarios.
 */
router.get("/listarComentarios", listarComentarios);

/**
 * @swagger
 * /crearComentario:
 *   post:
 *     summary: Crea un nuevo comentario.
 *     tags: [Comentarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               texto:
 *                 type: string
 *                 description: Contenido del comentario.
 *               autor:
 *                 type: string
 *                 description: Autor del comentario.
 *     responses:
 *       201:
 *         description: Comentario creado exitosamente.
 *       400:
 *         description: Error en los datos enviados.
 *       500:
 *         description: Error al crear el comentario.
 */
router.post("/crearComentario", crearComentario);

export default router;