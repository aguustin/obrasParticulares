import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id:{
        type: String,
        require: true
    },
    cuit:{
        type:String
    },
    email:{
        type:String,
        require: true
    },
    name:{
        type:String,
        require: true
    },
    password:{
        type:String,
        require:true
    },
    super:{
        type:Number,
        require: true
    },
    consulta:{
        type:String,
        require:true
    },
    tipo_plano:[String]
})

export default mongoose.model("Users", userSchema);