import { GraphQLEnumType } from "graphql"

const loanTypeEnnum = new GraphQLEnumType({
    name : "loanTypeEnnum",
    values :{
        CarLoan :{
            value :"CarLoan"
        },
        HouseingLoan:{
            value : "HouseingLoan"
        },
        MiscellaneousLoan :{
            value :"MiscellaneousLoan"
        },
        BikeLoan:{
            value :"BikeLoan"
        },
        ScootyLoan :{
            value :"ScootyLoan"
        }
    }
})


export{
    loanTypeEnnum
}