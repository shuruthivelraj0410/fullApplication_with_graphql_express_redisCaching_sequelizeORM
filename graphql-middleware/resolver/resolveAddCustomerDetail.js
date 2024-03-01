import { addCustomerLoanDetails } from "../../databasequeries/sequelizeQuery.js"


const resolveAddCustomerDetail = async(parent , args,context,info)=>{
   let response = await addCustomerLoanDetails(args)
   let data = {};
   data.response = response;
   return data
   
}

export {
    resolveAddCustomerDetail
}