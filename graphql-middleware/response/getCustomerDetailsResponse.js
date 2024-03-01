import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql"
import { GraphQLJSON } from "graphql-type-json";
// import {loan_from_Banks_Response} from "./loan_from_Banks_Response.js";
// import { responseTypeBanking } from "./responseTypeBanking.js"


const getCustomerDetailsResponse = new GraphQLObjectType({
    name : "getCustomerDetails",
    fields : {
        data : {
            type : GraphQLJSON
        }
    }
})


export {
    getCustomerDetailsResponse
}