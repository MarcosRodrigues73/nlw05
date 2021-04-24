import {Request, Response} from "express"
import { UserService } from "../services/UsersService"


//Criar classe UsersController
class UsersController{
    async create( request: Request, response: Response): Promise<Response> {
        
        const{ email} = request.body;
        
        const usersService = new UserService();

        const user = await usersService.create(email);

        return response.json(user);
    
    }

}
//Criar export da Classe UsersController
export {UsersController}