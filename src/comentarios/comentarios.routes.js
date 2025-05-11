import { Router } from "express";
import {
    crearComentario,
    listarComentarios
} from "./comentarios.controller.js";

const router = Router();

/**
 * @swagger
 * /listarComentarios/{publicacionId}:
 *   get:
 *     summary: Obtiene una lista de comentarios de una publicación específica.
 *     tags: [Comentarios]
 *     parameters:
 *       - in: path
 *         name: publicacionId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la publicación.
 *       - in: query
 *         name: limite
 *         schema:
 *           type: integer
 *           description: Número máximo de comentarios a devolver.
 *       - in: query
 *         name: desde
 *         schema:
 *           type: integer
 *           description: Número de comentarios a omitir.
 *     responses:
 *       200:
 *         description: Lista de comentarios obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 total:
 *                   type: integer
 *                 comentarios:
 *                   type: array
 *                   items:
 *                     type: object
 *       500:
 *         description: Error al obtener los comentarios.
 */
router.get("/listarComentarios/:publicacionId", listarComentarios);

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
 *               publicacion:
 *                 type: string
 *                 description: ID de la publicación asociada.
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