import { Request, Response } from "express"
import { MessagesServices } from "../services/MessagesService"


//Criar classe MessagesController

class MessagesController {

    async create (request:Request, response: Response)  {
        const {admin_id, text, user_id} = request.body
        
        const messagesService = new MessagesServices();
        
        const message = await messagesService.create({
            admin_id, 
            text, 
            user_id
        
        });
        return response.json(message);
    }
    async showByUser (request:Request, response:Response) {
        const { id } = request.params;
        
        const messagesService = new MessagesServices();

        const list = await messagesService.listByUser(id);

        return response.json(list);
    }
}

//exportar classe MessagesController

export {MessagesController};
