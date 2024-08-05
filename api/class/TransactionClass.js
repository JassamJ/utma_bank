//Movimiento de dinero (Crear transaccion)
//obtener rranacciones
//obtener rranacciones por usuario

import transactionModel from "../models/TransactionModel.js";

class ManagerTransaction{
    constructor(accountFromId, accountToId,type, amount, description){
        this.accountFromId = accountFromId;
        this.accountToId = accountToId;
        this.type = type;
        this.amount = amount;
        this.description = description;
    }

    async createTransaction(){
        try {
            const transaction = transactionModel.create({
                accountFromId : this.accountFromId,
                accountToId : this.accountToId,
                type : this.type,
                amount : this.amount,
                description : this.description 
            })
            return transaction;
        } catch (error) {
            throw new Error(`Error al crear la transaccion: ${error}`);
        }
    }

    async getTransaction(id){
        try{
        const transaction = await transactionModel.findById(id);
        return transaction;
    }catch (error){
        throw new Error(`Error al obtener la transaccion: ${error}`);
    }
    }

    async getTransactions(){
        try{
        const transactions = await transactionModel.findById(id);
        return transactions;
    }catch (error){
        throw new Error(`Error al obtener la transaccion: ${error}`);
    }
    }

    async getAccountTransactions(id){
        try{
        const transactions = await transactionModel.findById({accountFromId:id});
        return transactions;
    }catch (error){
        throw new Error(`Error al obtener la transaccion: ${error}`);
    }
    }
}