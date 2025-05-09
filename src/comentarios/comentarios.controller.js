import { Comentarios } from './comentarios.model.js';

export const crearComentario = async (req, res) => {
    try {
        const data = req.body;

        const comentario = await Comentarios.create(data);

        return res.status(201).json({
            message: "Comentario creado exitosamente",
            comentario
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al crear el comentario",
            error: error.message
        });
    }
};

export const listarComentarios = async (req, res) => {
    try {
        const { limite = 5, desde = 0 } = req.query;

        const [total, comentarios] = await Promise.all([
            Comentarios.countDocuments(),
            Comentarios.find()
                .skip(Number(desde))
                .limit(Number(limite))
        ]);

        return res.status(200).json({
            success: true,
            total,
            comentarios
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al listar los comentarios",
            error: error.message
        });
    }
};