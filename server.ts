import { createServer } from 'http';
import cors from 'cors';
import express from 'express';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});
const PORT = process.env.PORT || 3001;
let users: string[] = [];

app.use(cors());
server.listen(PORT, () => {
  console.log('Server started on port ', PORT);
});

io.on('connection', (socket) => {
  users.push(socket.id);
  io.emit('users', users);
  socket.on('disconnect', () => {
    users = users.filter((user) => user !== socket.id);
    io.emit('users', users);
  });
});
