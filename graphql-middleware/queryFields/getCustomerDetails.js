import { GraphQLString } from "graphql"
import { accountTypeEnnum } from "../../helper/accountTypeEnnum.js"
import { resolveGetCustomerDetails } from "../resolver/resolveGetCustomerDetails.js"
import { getCustomerDetailsResponse } from "../response/getCustomerDetailsResponse.js"
const getCustomerDetails = {
    type : getCustomerDetailsResponse,
    args : {
      emailId : {
        type : GraphQLString,
        description : "Email Id of a customer"
      },
      accountType :{
        type : accountTypeEnnum,
        description : "Account type of a customer"
      }
    },
    resolve : resolveGetCustomerDetails
}

export {
    getCustomerDetails
}