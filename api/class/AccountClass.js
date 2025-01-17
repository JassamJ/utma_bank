//Obtener cuenta
//Editar Cuentas
//Editar balance
//Crear cuenta

import AccountModel from "../models/AccountModel.js";
class ManagerAccount{
    constructor(userID, accountNumber, accountType, balance){
        this.userId = userId;
        this.accountNumber = accountNumber;
        this.accountType = accountType;
        this.balance = balance;
    }

    async getAccounts(){
        try {
            const accounts = await AccountModel.fiind();
            return accounts;
        } catch (error) {
            throw new Error(`Error al obtener cuentas ${error}`);
        }
    }

    async getAccount(id){
        try {
            const account = await AccountModel.findById(id);
            return account;
        } catch (error) {
            throw new Error(`Error al obtener cuentas ${error}`);
        }
    }
    async addBalance(id){
        try {
            this.balance += amount;
            await AccountModel.findByIdAndUpdate(id,{
                $set:{
                    balance:this.balance
                }
            })
            return "Ok";
        } catch (error) {
            throw new Error(`Error al agregar monto: ${error}`);
        }
    }
    async restBalance(id){
        try {
            this.balance -= amount;
            await AccountModel.findByIdAndUpdate(id,{
                $set:{
                    balance:this.balance
                }
            })
            return "Ok";
        } catch (error) {
            throw new Error(`Error al agregar monto: ${error}`);
        }
    }
    async createAccount(){
        try {
            const account = await AccountModel.create({
                userId:this.userId,
                accountNumber:this.accountNumber,
                accountType:this.accountType,
                balance:this.balance
            });
            return account;
        } catch (error) {
            throw new Error(`Error al crear cuenta: ${error}`);
        }
    }
}

export default ManagerAccount;