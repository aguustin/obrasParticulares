import bcrypt from "bcrypt";
import Users from "../models/userModels.js";

export const createProfesionalUser = async (req, res) => {

    const {id, cuit, email, contrasena, repetirContrasena} = req.body;

    if(contrasena === repetirContrasena){
        
        const hash = await bcrypt.hash(contrasena, 12);

        const idCounter = await Users.find(id).count();
        
        const newId = idCounter + 1;

        const creartUsuarioAdmin = new Users({
            id: newId,
            cuit: cuit,
            email: email,
            password: hash,
            sup:0
        })
        const response = await creartUsuarioAdmin.save();
        
        res.send(response);

    }else{
        res.sendStatus(400);
    }

}

export const authenticateProfesionalUser = async (req, res) => {
    const {email, password} = req.body;
    const emailExist = await Users.find({email: email});
    console.log(emailExist);
    if(emailExist){
        const passwordVerify = await bcrypt.compare(password, emailExist[0].password);

        if(!passwordVerify){
            res.sendStatus(401);
        }else{
            res.send(emailExist);
        }

    }else{
        res.sendStatus(400);
    }
}

export const allDataController = async (req, res) => {
    const allUsers = await Users.find({});
    res.send(allUsers);
}

export const deleteAllUsers = async (req, res) => {
    await Users.deleteMany();
    res.sendStatus(200);
}