const Message = require("../models/Message");

module.exports = (io) => {

  io.on("connection", (socket) => {

    console.log("User connected:", socket.id);

    // Join Room
    socket.on("joinRoom", (room) => {
      console.log("User joined room:", room);
      socket.join(room);
    });

    // Send Message
    socket.on("sendMessage", async (data) => {

      console.log("Message received:", data);

      if (!data.message) return;

      const newMessage = await Message.create({
        sender: data.sender,
        room: data.room,
        message: data.message
      });

      // Temporary broadcast to everyone
      io.emit("receiveMessage", newMessage);
    });

    // Disconnect
    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });

  });

};
