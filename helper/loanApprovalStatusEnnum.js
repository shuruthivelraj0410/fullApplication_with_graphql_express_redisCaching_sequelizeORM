import { GraphQLEnumType } from "graphql"


const loanApprovalStatusEnnum = new GraphQLEnumType({
    name : "loanApprovalStatusEnnum",
    values :{
        Approved :{
            value :"Approved"
        },
        Pending:{
            value : "Pending"
        },
        Rejected :{
            value :"Rejected"
        }
    }
})



export {
    loanApprovalStatusEnnum
}
// enum('Approved','Pending','Rejected')  
// 'CarLoan','HouseingLoan','MiscellaneousLoan','BikeLoan','ScootyLoan'