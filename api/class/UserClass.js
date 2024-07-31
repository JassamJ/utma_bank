//Registrarse el usuario
//Iniciar secion
//Cerrar secion
//Obtener informacion del usuario
//Crear transacciones
//Pedir prestamos
//Borrar cuenta
//Actualizar

import UserModel from "../models/UserModel.js";
import ManagerAccount from "./AccountClass.js";
import ManagerCard from "./CardClass.js";

class ManagerUser{
    costructor( email, phone, name, lastName, isInSession, isAdmin, password){
        this.email = email;
        this.phone = phone;
        this.name = name;
        this.lastName = lastName;
        this.isInSession = isInSession;
        this.isAdmin = isAdmin;
        this.password = password;
    }

    async register(){
        try {
            const user = await UserModel.create({
                email: this.email,
                phone: this.phone,
                name: this.name,
                lastName: this.lastName,
                isInSession: this.isInSession,
                isAdmin: this.isAdmin,
                password: this.password
            });
            const MA = new ManagerAccount(user._id,12345,"Ahorro",10000);
            const currentAccount = await MA.createAccount();
            const MC = new ManagerCard(user._id,currentAccount._id,"16digitos al azar","debito",
                "Dela fecha actual sumar 3 alos","Genera codgo de 3cifras","activa")

                await MC.createCard();
                return user;

            
        } catch (error) {
            throw new Error(`Error al registrar usuario: ${error}`);
        }
    }

    async Login(){
        try{
            const user = await UserModel.findOne({email: email});
            if(user){
                throw new Error(`Usuario no registrado`);
            }
            if(user.password !== password){
                throw new Error(`Contraseña incorrecta!`);
            }
            return "Succeeded"
        }catch (error){
            throw new Error(`Error al registrar usuario: ${error}`);
        }
    }

    async getuserInfo(id){
        try {
            const user = await UserModel.findById(id);
            return user;
        }catch (error){
            throw new Error(`Error al registrar usuario: ${error}`);
        }
    }

    async updateEmail(email,id){
        try {
            if(!email){
                throw new Error(`Correo invalido`);
            }
            await UserModel.findByIdAndUpdate(id,{
                $set:{email:email}
            })
            return "ok"
        } catch (error) {
            throw new Error(`Error al actualizar el correo: ${error}`);
        }
    }

    async updatePhone(phone,id){
        try {
            if(!phone){
                throw new Error(`Numero teefonico invalido`);
            }
            await UserModel.findByIdAndUpdate(id,{
                $set:{phone}
            })
            return "ok"
        } catch (error) {
            throw new Error(`Error al actualizar el numero telefonivo: ${error}`);
        }
    }

    async updatePassword(password,id){
        try {
            if(!password){
                throw new Error(`Contraseña invalida`);
            }
            await UserModel.findByIdAndUpdate(id,{
                $set:{password}
            })
            return "ok"
        } catch (error) {
            throw new Error(`Error al actualizar el paswsword: ${error}`);
        }
    }

    //Pendiente eliminar cuenta
}

export default ManagerUser;