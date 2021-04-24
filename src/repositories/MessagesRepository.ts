import { EntityRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";


//criar Classe MessageRepository
@EntityRepository(Message)
class MessagesRepository extends Repository<Message>{

}

export {MessagesRepository}

