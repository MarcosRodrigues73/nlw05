import {io} from "../http";

io.on("connect", (socket) =>{
    socket.on("client_first_access", (params) =>{
      console.log(params);
    });
});

//parei aqui em 24/04/2021 em 29:49 do vídeo https://www.youtube.com/watch?v=rjQJHrcqku8"