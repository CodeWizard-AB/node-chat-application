import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import { defaultError, notFoundError } from "./middlewares/error.middleware.js";

// * IMPORT ROUTES
import loginRouter from "./routes/login.routes.js";
import inboxRouter from "./routes/inbox.routes.js";
import usersRouter from "./routes/users.routes.js";
import { setPageTitle } from "./middlewares/pageTitle.middleware.js";

// * APPLICATION
const app = express();

// * DATABASE CONNECTION
connectDB();

// * MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.static("./public"));

// * TEMPLATE ENGINE
app.set("view engine", "ejs");

// * ROUTES DECLARATION
app.use("/", setPageTitle("Login"), loginRouter);
app.use("/users", setPageTitle("Users"), usersRouter);
app.use("/inbox", setPageTitle("Inbox"), inboxRouter);

// * ERROR HANDLING
app.use(notFoundError);
app.use(defaultError);

// * APP LISTEN
app.listen(process.env.PORT, () => {
	console.log("App listening to port", process.env.PORT);
});
