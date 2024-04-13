import { gracefulShutdown } from "./graceful-shutdown";
import { server, startServer } from "./app";

gracefulShutdown(server);
startServer(server);