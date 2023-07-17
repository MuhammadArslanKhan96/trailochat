const next = require('next')
const http = require('http');
const { Server } = require('socket.io');

const app = next({ dev: process.env.NODE_ENV !== 'production' })

app.prepare().then(() => {
    const server = http.createServer((req, res) => {
        // Handle API routes
        return app.getRequestHandler()(req, res)
    });


    const io = new Server(server, {
        cors: {
            origin: "*",
        },
    });
    // io.set("transports", ["websocket"]);
    io.on("connection", (socket) => {
        console.log(`User Connected: ${socket.id}`);

        socket.emit("hello", "hi");

        socket.on("newTrello", (data) => {
            io.emit("newData", data);
        });

        socket.on("disconnect", () => {
            console.log(`User disconnected: ${socket.id}`);
        });
    });



    server.listen(3000, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
    })
})
