import { io } from 'socket.io-client';

const URL = 'http://localhost:3003';

//preventing the auto-connect
export const socket = io(URL, {
    autoConnect: false
});