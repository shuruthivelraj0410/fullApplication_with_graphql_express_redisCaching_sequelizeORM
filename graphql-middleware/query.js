import { GraphQLObjectType } from "graphql"
import {getCustomerDetails} from "./queryFields/getCustomerDetails.js"
const query = new GraphQLObjectType({
    name : "Query",
    fields : {
        getCustomerDetails,
        // getLoanStatus 
    }
})





export {
    query
}