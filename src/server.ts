import express, { request, response } from "express"
import "./database";
import { routes} from "./routes"

const app = express();

app.use(express.json());

app.use(routes);

app.listen(1973, () =>  console.log("Server is running on port 1973"));



/**
 * app.get("/", ( request, response ) =>{
    return response.json({
        message: "Olá Marcos, que bom que está aqui!",
    });
});

app.post("/", (request, response) =>{
    return response.json({
        message: "Usuário salvo com sucesso!!",
    });
});
 */
