import mongoose from 'mongoose'

const connnectDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            dbName:"pintrest"
        })
        console.log("MongoDb Connected")

    }catch(error){
        console.log(error)
    }
}
export default connnectDb;