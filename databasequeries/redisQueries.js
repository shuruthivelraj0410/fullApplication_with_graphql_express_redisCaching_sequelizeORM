import { redisClient } from "../connections/redis.js"

const getData = async (redisCacheName) => {
    try {
        let response = await redisClient.get(redisCacheName)
        return response
    }
    catch (e) {
        console.log("Error while fetching data from redis : ", e)
        return ""
    }
}

const setData = async(redisCacheName,value)=>{
try{
     await redisClient.set(redisCacheName,value,120)
}catch(e){
    console.log("Error while storing data in redis : ",e)
}
}


export {
    getData,
    setData 
}