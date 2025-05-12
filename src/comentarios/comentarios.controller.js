import { Comentarios } from './comentarios.model.js';

export const crearComentario = async (req, res) => {
    try {
        const { autor, contenido, publicacion } = req.body;

if (!autor || !contenido || !publicacion) {
  return res.status(400).json({ message: "Faltan datos requeridos" });
}

const comentario = await Comentarios.create({
  autor,
  contenido,
  publicacion
});  
      return res.status(201).json(comentario); 
    } catch (error) {
      console.error("Error al crear comentario:", error);
      return res.status(500).json({
        message: "Error interno al crear el comentario",
        error: error.message,
      });
    }
  };
  

export const listarComentarios = async (req, res) => {
    try {
        const { publicacionId } = req.params; 
        const { limite = 100, desde = 0 } = req.query;

        const [total, comentarios] = await Promise.all([
            Comentarios.countDocuments({ publicacion: publicacionId }),
            Comentarios.find({ publicacion: publicacionId })
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