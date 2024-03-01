import { DataTypes } from "sequelize";
import {sequelize} from "../connections/sequelize.js";

const bankingModel = sequelize.define('bankings',{
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    emailId : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },
    balance :{
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    accountType:{
        type : DataTypes.ENUM,
        values : ['Savings','Investment','Priority','Credit'],
        defaultValue : 'Savings',
        allowNull : false
    }
})

sequelize.sync().then(()=>{
    console.log("Model created successfully")
}).catch((err)=>{
    console.log("Error in creating model : ",err)
})

export {
    bankingModel
}