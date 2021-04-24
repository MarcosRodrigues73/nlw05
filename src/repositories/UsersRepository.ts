import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";
//importar do typeorm entidaderepositorio e o repositorio
//importar entidade user

//criar o entidaderepositorio para User
@EntityRepository(User)

//criar classe UsersRepository
class UsersRepository  extends Repository <User>{

}

//criar exportação da classe UserRepository
export {UsersRepository}