import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

//criar classe UserService
class UserService {

    private usersRepository: Repository<User>

    constructor() {

     this.usersRepository = getCustomRepository(UsersRepository);
        
    }

    async create(email: string){

        
        //verificar se existe o user
        const userExists =  await this.usersRepository.findOne({
            email
        })
        //se existir retornar user
        if (userExists) {
            return userExists;
        }
        //se não existir, salvar no BD
        const user = this.usersRepository.create({
            email
        });

        await this.usersRepository.save(user);

        return user;
    }

}

//criar exportação da classe UserService
export {UserService}