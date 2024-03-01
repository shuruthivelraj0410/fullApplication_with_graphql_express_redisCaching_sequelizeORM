import { GraphQLObjectType } from "graphql"
import { GraphQLJSON } from "graphql-type-json"

const addCustomerDetailResponse = new GraphQLObjectType({
    name :"addCustomerDetailResponse",
    fields :{
        response : {
            type : GraphQLJSON
        }
    }
})



export {
    addCustomerDetailResponse
}