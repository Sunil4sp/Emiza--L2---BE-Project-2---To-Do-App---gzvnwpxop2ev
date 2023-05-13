function success(res,message){
    return res.status(200).json(message);
}

function dataNotFound(res, message){
    return res.status(404).send(message);
}

