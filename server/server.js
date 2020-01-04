// Express requirements 
import path from "path";
import morgan from "morgan";
import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import Loadable from "react-loadable";
import cookieParser from "cookie-parser";

// Our loader - this basically acts as the entry point for each page load
import loader from "./loader";

// Create our express app using the port optionally specified
const app = express();
const PORT = process.env.PORT || 3000;

// Compress, parse, log, and raid the cookie jar
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cookieParser());

// Set up homepage, static assets, and capture everything else
app.use(express.Router().get("/", loader));
app.use(express.static(path.resolve(__dirname, "./../build")));
app.use(loader);

// We tell React Loadable to load all required assets and start listening - ROCK AND ROLL!
Loadable.preloadAll().then(() => app.listen(PORT, console.log(`App started on http://localhost:${PORT} !`)));

// Handle the bugs somehow
app.on('error', error => {
	if (error.syscall !== 'listen') {
		throw error;
	}
	const bind = typeof PORT === "string" ? "Pipe " + PORT : "Port " + PORT;
	switch (error.code) {
		case "EACCES":
			console.error(bind + " requires elevated privileges");
			process.exit(1);
			break;
		case "EADDRINUSE":
			console.error(bind + " is already in use");
			process.exit(1);
			break;
		default:
			throw error;
	}
});
