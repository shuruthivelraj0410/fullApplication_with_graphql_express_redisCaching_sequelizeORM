import { DataTypes } from "sequelize";
import {sequelize} from "../connections/sequelize.js";

const loanModel = sequelize.define('loan_from_Banks',{
    loadId : {
        type : DataTypes.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    emailId:{
        type : DataTypes.STRING,
        allowNull : false
    },
    loanType : {
        type : DataTypes.ENUM,
        allowNull : false,
        values : ['CarLoan','HouseingLoan','MiscellaneousLoan','BikeLoan','ScootyLoan'],
        defaultValue : 'MiscellaneousLoan'
    },
    loanApprovalStatus :{
        type : DataTypes.ENUM,
        allowNull : false,
        values : ['Approved','Pending','Rejected'],
        defaultValue : 'Pending'
    }
})

sequelize.sync().then(()=>{
    console.log("Model created successfully")
}).catch((err)=>{
    console.log("Error in creating model : ",err)
})

export {
    loanModel
}