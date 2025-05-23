import mongoose from 'mongoose';

const PublicacionesSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  curso: {
    type: String,
    required: true,
    enum: ['Taller', 'Practicas', 'Tecnologia']
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
  comentario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comentario', 
  },
});

PublicacionesSchema.methods.toJSON = function () {
    const { __status, _id, ...publicacion } = this.toObject();
    publicacion._id = _id;
    return publicacion;
  };


export const Publicaciones = mongoose.model('Publicaciones', PublicacionesSchema);