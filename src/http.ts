import express from "express";
import { createServer } from "http";
import {Server, Socket} from "socket.io";
import path from "path";   

import "./database";
import { routes} from "./routes"

const app = express();

//importar pasta public
app.use( express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine ("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
    return response.render("html/client.html")
})

//criar o protocolo http
const http = createServer(app);

//criar o protocolo websocket
const io =  new Server (http);

io.on("connection", (socket: Socket) =>{

    //console.log("Se Conectou", socket.id)
});

app.use(express.json());

app.use(routes);

export {http, io };
