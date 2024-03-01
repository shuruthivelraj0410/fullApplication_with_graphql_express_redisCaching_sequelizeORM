import { GraphQLObjectType } from "graphql"




const responseTypeBanking = new GraphQLObjectType({
    name : "responseTypeBanking",
    fields : {
        emailId : {
            type : GraphQLString
        },
        balance :{
            type : GraphQLInt
        },
        accountType : {
            type : GraphQLString
        },
        loan_from_Banks : {
            type : loan_from_Banks_Response
        }
    }
})






export {
    responseTypeBanking
}