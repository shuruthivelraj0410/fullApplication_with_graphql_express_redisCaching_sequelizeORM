import { GraphQLNonNull, GraphQLString } from "graphql"
import {loanApprovalStatusEnnum} from "../../helper/loanApprovalStatusEnnum.js"
import {loanTypeEnnum} from "../../helper/loanTypeEnnum.js"
import {addCustomerDetailResponse} from "../response/addCustomerDetailResponse.js"
import {resolveAddCustomerDetail} from "../resolver/resolveAddCustomerDetail.js"
const addCustomerDetail = {
    type : addCustomerDetailResponse,
    args :{
        emailId : {
            type : new GraphQLNonNull(GraphQLString)
        },
            loanType : {
                type : loanTypeEnnum
            },
            loanApprovalStatus : {
                type : loanApprovalStatusEnnum
            }
    },
    resolve : resolveAddCustomerDetail
}





export {
    addCustomerDetail
}