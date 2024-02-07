import express from "express";
//para visualizar las rutas que voy solicitando a través de la linea de comandos
import morgan from "morgan";

//Routes
import indexRoutes from "./routes/index.js";

const app = express();

//Settings
app.set("port", 3000);

//Middlewares o intermediario
app.use(morgan("dev"));

//Setting Routes
const ignoreFaviconMiddleware = (request, response, next) => {
    if (request.originalUrl.includes("favicon.ico")) {
        response.status(204).end();
    }
    next();
};

app.use(ignoreFaviconMiddleware);
//importando lo que hay dentro de indexRoutes
//por ejemplo generatePassword/50
app.use("/generatePasswords", indexRoutes);

export default app;
