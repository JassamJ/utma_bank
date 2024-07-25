//crear una tarjeta
//obtener una tarjeta
//obtener tarjeta

import  CardModel from "../models/CardModel.js";

class ManagerCard{
    constructor(userId,
        accountId,
        cardNumber,
        cardType,
        expirationDate,
        securityCode,
        status){
        this.userId = userId;
        this.accountId = accountId;
        this.cardNumber = cardNumber;
        this.cardType = cardType;
        this.expirationDate = expirationDate;
        this.securityCode = securityCode;
        this.status = status;
    }
    async createCard(){
      try {
        await CardModel.create({
            userId: this.userId, 
            accountId: this.accountId, 
            cardNumber: this.cardNumber, 
            cardType: this.cardType, 
            expirationDate: this.expirationDate, 
            securityCode: this.securityCode, 
            status: this.status 
        });
        return "Ok";
      } catch (error) {
        throw new Error(`Error al crear tarjeta ${error}`);
      }}


      async getCards(){
        try {
            const Cards = await AccountModel.fiind();
            return Cards;
        } catch (error) {
            throw new Error(`Error al obtener cuentas ${error}`);
        }
    }

    async getCard(id){
        try {
            const Card = await AccountModel.findById(id);
            return Card;
        } catch (error) {
            throw new Error(`Error al obtener cuentas ${error}`);
        }
    }
}

export default ManagerCard;