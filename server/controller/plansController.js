import padrones from "../models/planModels.js";

export const createPlan = (req, res) => {
    const {padron, expediente, plano, usuario} = req.body;
}

export const allForStatePlansController = async (req, res) => {
    const {estado} = req.params;
    console.log(estado);
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
    if(response.length === 0){
        const response = await padrones.find({'expedientes.d4001IdExpediente': {$regex: search, $options: "i"}});
        res.send(response);   
    }
   

    res.send(response);
}