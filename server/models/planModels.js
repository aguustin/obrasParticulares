import mongoose from "mongoose";

const planSchema = new mongoose.Schema({
    numeroPadron:{
        type: String,
        require: true
    },
    expedientes:[{
        caratulaabreviada:{ type: String},
        codTipoexpediente:{ type: String},
        d4001Anno: {type:Number},
        d4001Canthojas:{type: String},
        d4001CodpostalSolic:{type: String},
        d4001CuitSolic:{type: Number},
        d4001DomicCalleSolic:{type: String},
        d4001DomicNroSolic:{type: Number},
        d4001Estado:{type: String},
        d4001Fechaingreso: {type:Date},
        d4001FechaultimoMov: {type: Date},
        d4001IdExpediente:{type: String},
        d4001Iniciante: {type:String},
        d4001Letra454: {type: String},
        d4001LocalidadSolic:{type: String},
        d4001Motivo451:{type: Number},
        d4001Numero:{type:Number},
        d4001NumeroDocIniciante:{type: Number},
        d4001NumeroDocSolic:{type: Number},
        d4001OficinaActual1311:{type: Number},
        d4001OficinaIngresante1311: {type: String},
        d4001Solic: {type: String},
        d4001TelefonoSolic:{type: String},
        d4001Tema452: {type:String},
        d4001TextoCaratula: {type: String},
        d4001TipoDocIniciante: {type: String},
        d4001TipoDocSolic: {type: Number},
        d4001Tipoexpediente453:{type: String},
        d4001UsuarioIngresante:{type: String},
        d9902IdMunicipalidad: {type: Number},
        descEstado: {type: String},
        descExpediente:{type: String},
        descExpedientePadre: {type: String},
        descLetra:{type: String},
        descMotivo:{type:String},
        descOficinaactual:{type: String},
        descOficinaingresante: {type: String},
        descTema: {type: String},
        descTipoexpediente: {type: String},
        planos: {
            objetoPlano:
            [{
                idplanos: {type: String},
                fecha: {$date:{type: Date}},
                descripcion:{type: String},
                usuario_id: {type: String},
                usuario_email: {type: String},
                usuario_nombre: {type: String},
                subidoPDF: {$oid: {type: String}},
                observaciones: {
                  fecha: {$date: {type: Date}},
                  admin_id: {type: String},
                  admin_email: {type: String},
                  admin_nombre: {type: String},
                  observadoPDF: {$oid: {type: String}}
                }
            }]
        },
      asignaciones: {
        objetoPlano:
        [{
          fecha:{type: Date},
          admin_id:{ type:String },
          admin_email:{ type:String },
          admin_nombre:{ type:String }
        }]
      }
    }]
})

export default mongoose.model("padrones", planSchema);