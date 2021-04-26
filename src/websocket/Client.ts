import { Connection } from "../entities/Connection";
import {io} from "../http";
import {ConnectionsServices} from "../services/ConnectionsService"
import { UsersService } from "../services/UsersService";
import { MessagesServices } from "../services/MessagesService";
import { UsersRepository } from "../repositories/UsersRepository";

interface IParams{
  text: string;
  email: string;
}

io.on("connect", (socket) =>{
    const connectionsServices = new ConnectionsServices();
    const userService = new UsersService();
    const messageService = new MessagesServices();

    socket.on("client_first_access", async (params) =>{
      const socket_id =  socket.id;
      const { text, email } =  params as IParams;
      let user_id = null;

      const userExists = await UsersService.findbByEmail  (email);

      if (!userExists) {
        const user  = await userService.create(email);
      
      await connectionsServices.create({
        socket_id,
        user_id: user.id
      });
      user_id = user.id;
    }else {
      user_id = userExists.id;
      const connection = await connectionsServices.findbyUserId (userExists.id);
      
      if(!connection) {
      
        await connectionsServices.create({
        socket_id,
        user_id:  userExists.id,
        })
      } else {
        connection.socket_id = socket_id;
        
        await connectionsServices.create(connection);
         }
     }

     await messageService.create(
       text,
       user_id
     )

      });
});

//parei aqui em 24/04/2021 em 29:49 do vídeo https://www.youtube.com/watch?v=rjQJHrcqku8"