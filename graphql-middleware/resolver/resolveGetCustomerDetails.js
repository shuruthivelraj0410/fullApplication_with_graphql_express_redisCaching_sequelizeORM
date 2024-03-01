import { getCustomerDetails } from '../../databasequeries/sequelizeQuery.js'
import { setData, getData } from '../../databasequeries/redisQueries.js'
const resolveGetCustomerDetails = async (parent, args, context, info) => {
    let res = {}
    const redisCacheName = "resolveGetCustomerDetails-" + JSON.stringify(args)
    let cachedResponse = await getData(redisCacheName);
    if (cachedResponse) {
        res = JSON.parse(cachedResponse)
    }
    else {
        res = await getCustomerDetails(args)
      if(res) { await setData(redisCacheName,JSON.stringify(res)) }
    }
    let response = {
        data: res
    }
    return response
}



export {
    resolveGetCustomerDetails
}