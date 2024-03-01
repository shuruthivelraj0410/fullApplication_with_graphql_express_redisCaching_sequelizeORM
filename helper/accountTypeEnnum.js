import { GraphQLEnumType } from "graphql"

const accountTypeEnnum = new GraphQLEnumType({
    name : "accountTypeEnnum",
    values : {
        Savings : {
            value : "Savings"
        },
        Investment : {
            value : "Investment"
        },
        Priority : {
            value : "Priority"
        },
        Credit : {
            value : "Credit"
        }
    }
})


export {
    accountTypeEnnum
}