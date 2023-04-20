import express from "express";
import fileUpload from "express-fileupload";
import morgan from "morgan";
import passport from "passport";
import { PORT } from "./config.js";
import { DBconnection } from "./database.js";
import prueba from "./routes/usersRoutes.js";
import pruebaCargaPlanos from "./routes/plansRoutes.js";

const app = express();
DBconnection();

//settings

//middlewares
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads"
}));
app.use(passport.initialize());
app.use(morgan("dev"));

//routes
app.use(prueba);
app.use(pruebaCargaPlanos);

//listen
app.listen(PORT);

console.log("db connected in port: ", PORT);