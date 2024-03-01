import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql"


const loan_from_Banks_Response = new GraphQLObjectType({
    name : "loan_from_Banks_Response",
    fields : {
    loadId : {
        type : GraphQLInt
    },
    loanType : {
        type : GraphQLString
    },
    loanApprovalStatus : {
        type : GraphQLString
    }
}
})


export {
    loan_from_Banks_Response
}