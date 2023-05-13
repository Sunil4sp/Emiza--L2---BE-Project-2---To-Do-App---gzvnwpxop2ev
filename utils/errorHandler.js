function errorHandler(ctrlFunc){
    return async(req, res)=>{
        try{
            await ctrlFunc(req, res);
        }
        catch(err){
            return res.status(404).json({
                message: err.message,
                status: "fail"
            });
        }
    }
}

module.exports = {
    errorHandler
}