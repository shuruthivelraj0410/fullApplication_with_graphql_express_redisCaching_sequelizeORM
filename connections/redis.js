import redis from "redis";

let redisClient = redis.createClient({
    url: `redis://127.0.0.1:6379/5`
});

(async () => {
    try {
        await redisClient.connect()
        console.log("Redis connected successfully")
    }
    catch (e) {
        console.log("Error in connecting redis : ", e)
    }
})();

export {
    redisClient
}