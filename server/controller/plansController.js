import padrones from "../models/planModels.js";

/*export const createPlan = async (req, res) => {
    const {padron, expediente, tipoPlano, plano, usuario} = req.body;
    //crear indice para el "tipo_plano" cuando se elija
    const response = await padrones.createIndex({"planos.objetoPlano": tipoPlano});
    response.send(response);
}*/

export const getPlansController = async (req, res) => {
    const all = await padrones.find({}).limit(10);
    res.send(all);
}

export const allForStatePlansController = async (req, res) => {
    const {estado} = req.params;
    const todos = await padrones.find({'expedientes.d4001Estado': estado}).limit(10);
    res.send(todos);
}

export const searchPlan = async (req, res) => {
    const {search} = req.params;
    
    const response = await padrones.find({'expedientes.descExpediente': {$regex: search, $options: "i"}});

    if(response.length === 0){
        const response = await padrones.find({'expedientes.d4001Numero': {$regex: search, $options: "i"}});
        res.send(response);   
    }
    if(response.length === 0){
        const response = await padrones.find({'expedientes.d4001Padron': {$regex: search, $options: "i"}});
        res.send(response);   
    }
    if(response.length === 0){
        const response = await padrones.find({'expedientes.d4001IdExpediente': {$regex: search, $options: "i"}});
        res.send(response);   
    }
   

    res.send(response);
}