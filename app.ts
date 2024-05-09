/* import dotnenv from "dotenv";
import { Server } from './models/server';

dotnenv.config();

const server = new Server();

server.listen(); */


import express from "express";
import cors from "cors";
import usersRouter from "./routes/usuarios.routers";
import dbConnection from "./database/connect";

const app = express();

app.use(express.json())  // la comunicacion entre servidor y cliente es con JSON
app.use(cors()) // las referencias cruzadas

const PORT = 3000;

(async () => {
    try {
        await dbConnection.authenticate(); // conexion a la Base de datos
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }

    app.use('/api', usersRouter); // el enrutamiento que van a tener tus peticiones

    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
})();