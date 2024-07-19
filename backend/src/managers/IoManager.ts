import http from 'http';

import { server } from "socket.io";
const server = http.createserver();


export class IoManager {
    private static io: Server;
        
    public static getIo() {
         if(!this.i0) {
            const io = new server(server);
            this.io = io;
         }
     
         return this.io;

        }
    }
