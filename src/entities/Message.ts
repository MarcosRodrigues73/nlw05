import{Entity, PrimaryColumn, CreateDateColumn, Column, ManyToOne, JoinColumn} from "typeorm"
import {v4 as uuid } from "uuid"
import { User } from "./User";
//importar typeorm e uuid


//especificar o banco
@Entity("messages")

//criar a classe Message com as colunas do banco
class Message {

    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;

    @Column()
    text: string;

    //criar o relacionamento e juntar com a coluna user_id
    @JoinColumn({ name: "user_id" })
    @ManyToOne(() => User)
    user: User;

    @Column()
    user_id: string;

    @CreateDateColumn()
    created_at: Date;

    //criar construtor não encontrando o id gerar uuid
    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}
//exportar a classe Message

export {Message}