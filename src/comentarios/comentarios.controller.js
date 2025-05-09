import { Publicaciones } from './publicaciones.model.js';

export const crearPublicacion = async (req, res) => {
    try {
        const data = req.body;

        const publicacion = await Publicaciones.create(data);

        return res.status(201).json({
            message: "Publicación creada exitosamente",
            publicacion
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al crear la publicación",
            error: error.message
        });
    }
};

export const listarPublicaciones = async (req, res) => {
    try {
        const { limite = 5, desde = 0 } = req.query;

        const [total, publicaciones] = await Promise.all([
            Publicaciones.countDocuments(),
            Publicaciones.find()
                .skip(Number(desde)) 
                .limit(Number(limite)) 
        ]);

        return res.status(200).json({
            success: true,
            total, 
            publicaciones 
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al listar las publicaciones",
            error: error.message
        });
    }
};