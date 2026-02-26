const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();  // ✅ FIRST create app

app.use(cors());
app.use(express.json());

// ✅ Static file serve after app created
app.use(express.static(__dirname));

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

// ✅ Socket logic after io created
require('./socket/chatSocket')(io);

app.get('/', (req, res) => {
  res.send('Chat server running...');
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});