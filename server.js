// server.js
const express = require('express');
const app = express();

// Create an HTTP server using the Express app.
const http = require('http').createServer(app);

// Integrate Socket.IO with the HTTP server.
const io = require('socket.io')(http);

// Serve static files (HTML, CSS, client-side JavaScript) from the "public" directory.
app.use(express.static('public'));

// Listen for new connections from clients.
io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for 'chat message' events from this client.
  socket.on('chat message', (data) => {
    // Broadcast the message to all connected clients, including the sender.
    io.emit('chat message', data);
  });

  // Log when a client disconnects.
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Define the port (default to 3000 if not specified).
const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
