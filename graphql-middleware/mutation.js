import { GraphQLObjectType } from "graphql"
import { addCustomerDetail } from "./mutationFields/addCustomerDetail.js"
const mutation = new GraphQLObjectType({
    name : "Mutations",
    fields : {
        addCustomerDetail
    }
})


export {
    mutation
}