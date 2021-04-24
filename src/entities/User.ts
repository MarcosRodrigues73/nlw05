import {Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm"
import{v4 as uuid} from "uuid"

//chamar entidade "Users" do typeorm
@Entity("users")

//Criar Classe User
class User {

    @PrimaryColumn()
    id: string;
    
    @Column()
    email: string;
    
    @CreateDateColumn()
    created_at: Date;

    //iniciar construtor avaliando se existe o id
    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }

}
//exportar Classe user
export {User}