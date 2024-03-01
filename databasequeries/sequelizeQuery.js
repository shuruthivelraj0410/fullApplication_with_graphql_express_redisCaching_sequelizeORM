import { loanModel } from "../models/loan_from_bank.js";
import { bankingModel } from "../models/banking.js";
import { Op } from "sequelize";

bankingModel.hasMany(loanModel, {
    foreignKey: "emailId",
    sourceKey: "emailId"
})
loanModel.belongsTo(bankingModel, {
    foreignKey: "emailId",
    targetKey: "emailId"
})

const getCustomerDetails = async (values) => {
    let whereClause = {}
    if (values.emailId || values.accountType) {
        whereClause[Op.or] = [];
        if (values.emailId) {
            whereClause[Op.or].push({ emailId: values.emailId })
        }
        if (values.accountType) {
            whereClause[Op.or].push({ accountType: values.accountType })
        }
    }
    let data = await bankingModel.findAll({
        include: {
            model: loanModel
        },
        where: whereClause
    })
    // data = JSON.stringify(data)
    return data;
};
const getLoanStatus = async (values) => {
    let whereClause = {}
    if (values.emailId || values.loanType || values.loanApprovalStatus) {
        whereClause[Op.or] = [];
        if (values.emailId) {
            whereClause[Op.or].push({ emailId: values.emailId })
        }
        if (values.loanType) {
            whereClause[Op.or].push({ loanType: values.loanType })
        }
        if (values.loanApprovalStatus) {
            whereClause[Op.or].push({ loanApprovalStatus: values.loanApprovalStatus })
        }
    }
    let data = await loanModel.findAll({
        include: {
            model: bankingModel
        },
        where: whereClause
    })
    data = JSON.stringify(data)
    return data;
}
const addCustomerDetail = async (values) => {
    let [data, created] = await bankingModel.findOrCreate({
        where: { emailId: values.emailId },
        defaults: {
            emailId: values.emailId,
            balance: values.balance,
            accountType: values.accountType
        }
    })
    let response = {};
    response.code = (created) ? 200 : 400
    response.message = (created) ? `customer ${values.emailId} details created successfully.` : `customer ${values.emailId} data is already uploaded.`;
    return response
}
const addCustomerLoanDetails = async (values) => {
    let [data, created] = await loanModel.findOrCreate({
        where: {
            emailId: values.emailId,
            loanType: values.loanType
        },
        defaults: {
            emailId: values.emailId,
            loanType: values.loanType,
            loanApprovalStatus: values.loanApprovalStatus
        }
    })
    let response = {};
    response.code = (created) ? 200 : 400
    response.message = (created) ? `customer ${values.emailId} loan details created successfully.` : `customer ${values.emailId} loan data is already uploaded.`;
    return response
}
// (async () => {
//     let values = {}
//     values.emailId = "shuruthivelraj0410@gmail.com "
//     values.loanType = "CarLoan"
//     // values.accountType = ""
//     console.log(await addCustomerLoanDetails(values))
// })();

export {
    getCustomerDetails,
    getLoanStatus,
    addCustomerDetail,
    addCustomerLoanDetails
}