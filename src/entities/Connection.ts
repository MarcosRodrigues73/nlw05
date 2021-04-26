import{Entity, PrimaryColumn, CreateDateColumn, Column, ManyToOne, JoinColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid } from "uuid";
import { User } from "./User";
//importar typeorm e uuid

@Entity("connections")
class Connection {
    
    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;

    @Column()
    socket_id: string;

    //criar o relacionamento e juntar com a coluna user_id
    @JoinColumn({ name: "user_id" })
    @ManyToOne(() => User)
    user: User;

    @Column()
    user_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    //criar construtor não encontrando o id gerar uuid
    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export {Connection}
