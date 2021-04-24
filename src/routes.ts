import { response, Router } from "express"
import { MessagesController } from "./controller/MessagesController";
import { SettingsController } from "./controller/SettingsController";
import { UsersController } from "./controller/UsersController";


const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesControlller = new MessagesController();

routes.post("/settings", settingsController.create);
routes.post("/users", usersController.create);

routes.post("/messages", messagesControlller.create);
routes.post("/messages/:id", messagesControlller.showByUser);


export {routes}