import { resolve } from "path";
import express from 'express';
import { Server } from 'ws';
const app = express();
const WS_PORT
= 8888;
const HTTP_PORT = 8000;
const wsServer = new Server({ port: WS_PORT }, () => console.log('WS Server is listening at $(WS_PORT}'));
let connectedClients = [];
wsServer.on('connection', (ws, req) => {
    console, log(' Connected');
    connectedClients.push(ws);
    ws.on('message', data =>{ connectedClients.forEach((ws, i) => {
        if(ws.readyState === ws.OPEN) {
                ws.send(data);
            }else {
                connectedclients.splice(i, 1);
            }
})

});
});
app.get('/client', (reg, res)=>res.sendFile(resolve(_dirname, './client.html')));
app. listen(HTTP_PORT, ()=>console.Log('HTTP server listening at ${HTTP_PORT}'));