import * as http from "http";

export const gracefulShutdown = (server: http.Server) => {
  process.on("SIGTERM", () => {
    console.log("Received SIGTERM. Starting graceful shutdown...");
    server.close(() => {
      console.log("HTTP server closed. Exiting...");
      process.exit(0);
    });
  });

  process.on("SIGINT", () => {
    console.log("\nReceived SIGINT (Ctrl+C). Starting graceful shutdown...");
    server.close(() => {
      console.log("HTTP server closed. Exiting...");
      process.exit(0);
    });
  });
};
