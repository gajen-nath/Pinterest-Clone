const TryCatch = (hanlder) =>{
    return async(req,res,next)=>{
        try{
            await hanlder(req,res,next);

        }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
    }
}
export default TryCatch;