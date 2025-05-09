import mongoose from 'mongoose';

const ComentariosSchema = new mongoose.Schema({
  autor: {
    type: String,
    required: [true, "El nombre del autor es obligatorio"],
    trim: true,
    maxLength: [50, "El nombre no puede exceder los 50 caracteres"],
  },
  contenido: {
    type: String,
    required: [true, "El contenido del comentario es obligatorio"],
    trim: true,
    maxLength: [500, "El comentario no puede exceder los 500 caracteres"],
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
  publicacion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Publicaciones",
    required: [true, "La publicación asociada es obligatoria"],
  },
});

ComentariosSchema.methods.toJSON = function () {
  const { __status, _id, ...comentario } = this.toObject();
  comentario.uid = _id;
  return comentario;
};

export const Comentarios = mongoose.model('Comentarios', ComentariosSchema);