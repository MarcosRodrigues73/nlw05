import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

//criar classe UserService
class UserService {
    async create(email: string){

        const usersRepository = getCustomRepository(UsersRepository)
        
        //verificar se existe o user
        const userExists =  await usersRepository.findOne({
            email
        })
        //se existir retornar user
        if (userExists) {
            return userExists;
        }
        //se não existir, salvar no BD
        const user = usersRepository.create({
            email
        });

        await usersRepository.save(user);

        return user;
    }

}

//criar exportação da classe UserService
export {UserService}